/* eslint-disable react/prop-types */
import React from "react";

function getWeatherIcon(code) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤️"],
    [[2], "🌥️"],
    [[3], "☁️"],
    [[45, 48], "😶‍🌫️"],
    [[51, 56, 61, 66, 80], "🌦️"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧️"],
    [[71, 73, 75, 77, 85, 86], "🌨️"],
    [[95], "🌩️"],
    [[96, 99], "⛈️"],
  ]);

  const arr = [...icons.keys()].find((key) => key.includes(code));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
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
  constructor(props) {
    super(props);
    this.state = {
      location: "kabul",
      isLoading: false,
      dipslayLocation: "",
      weather: {},
    };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  async fetchWeather() {
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
  }

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <article>
          <input
            onChange={(e) => this.setState({ location: e.target.value })}
            value={this.state.location}
            type="text"
            placeholder="Search from location..."
          />
        </article>
        <button onClick={this.fetchWeather}>Get weather</button>
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

class Weather extends React.Component {
  render() {
    const {
      temperature_2m_max: maxTemp,
      temperature_2m_min: minTemp,
      time: dates,
      weathercode: codes,
    } = this.props.weather;
    return (
      <div className="weather-report">
        <h2>Weather {this.props.location}</h2>
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
