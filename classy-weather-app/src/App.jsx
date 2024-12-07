/* eslint-disable react/prop-types */
import React from "react";

const icons = [
  { codes: [0], icon: "☀️" },
  { codes: [1], icon: "🌤️" },
  { codes: [2], icon: "🌥️" },
  { codes: [3], icon: "☁️" },
  { codes: [45, 48], icon: "🌫️" },
  { codes: [51, 56, 61, 66, 80], icon: "🌦️" },
  { codes: [53, 55, 63, 65, 57, 67, 81, 82], icon: "🌧️" },
  { codes: [71, 73, 75, 77, 85, 86], icon: "🌨️" },
  { codes: [95], icon: "🌩️" },
  { codes: [96, 99], icon: "⛈️" },
];

function getWeatherIcon(code) {
  const match = icons.find((item) => item.codes.includes(code));
  return match ? match.icon : "NOT FOUND";
}

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());

  return String.fromCodePoint(...codePoints);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

class App extends React.Component {
  state = {
    location: "",
    isLoading: false,
    dipslayLocation: "",
    weather: {},
  };

  // when using arrow function no need to bind it in constructor
  fetchWeather = async () => {
    if (this.state.location.length < 2) return this.setState({ weather: {} });
    try {
      this.setState({ isLoading: true });
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();
      console.log(geoData);

      if (!geoData.results) throw new Error("Location not found!");

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);

      this.setState({
        dipslayLocation: `${name} ${convertToFlag(country_code)}`,
      });

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );

      const weatherData = await weatherRes.json();
      this.setState({ weather: weatherData.daily });
    } catch (error) {
      console.error(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  setLocation = (e) => this.setState({ location: e.target.value });

  // This is like useEffect with [] dependency
  componentDidMount() {
    // this.fetchWeather();
    this.setState({
      location: localStorage.getItem("location") || "",
    });
  }

  // This is like useEffect with [location] dependency
  componentDidUpdate(prevProps, prevState) {
    if (this.state.location !== prevState.location) {
      this.fetchWeather();
      localStorage.setItem("location", this.state.location);
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <Input
          location={this.state.location}
          onSetLocation={this.setLocation}
        />
        {/* <button onClick={this.fetchWeather}>Get Weather</button> */}
        {this.state.isLoading && <p className="loader">Loading...</p>}

        {this.state.weather.weathercode && (
          <Weather
            weather={this.state.weather}
            location={this.state.dipslayLocation}
          />
        )}
      </div>
    );
  }
}

export default App;

class Input extends React.Component {
  render() {
    return (
      <article>
        <input
          onChange={this.props.onSetLocation}
          value={this.props.location}
          type="text"
          placeholder="Search from location..."
        />
      </article>
    );
  }
}

class Weather extends React.Component {
  // This is like the cleanup function in useEffect hook
  componentWillUnmount() {
    console.log("component unmounted");
  }

  render() {
    const {
      temperature_2m_max: maxTemp,
      temperature_2m_min: minTemp,
      time: dates,
      weathercode: codes,
    } = this.props.weather;
    return (
      <div className="weather-report">
        <h2>{this.props.location}</h2>
        <ul className="weekdays-weather-list">
          {dates.map((date, idx) => (
            <Day
              key={idx}
              date={date}
              maxTemp={maxTemp.at(idx)}
              minTemp={minTemp.at(idx)}
              code={codes.at(idx)}
              isToday={idx === 0}
            />
          ))}
        </ul>
      </div>
    );
  }
}

class Day extends React.Component {
  render() {
    const { date, maxTemp, minTemp, code, isToday } = this.props;
    return (
      <li>
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday ? "Today" : formatDay(date)}</p>
        <p>
          {Math.floor(minTemp)}&deg; &mdash;{" "}
          <strong>{Math.ceil(maxTemp)}&deg;</strong>
        </p>
      </li>
    );
  }
}
