/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:3000";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  errorMsg: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };

    case "SET_CITIES":
      return { ...state, cities: action.payload };

    case "STOP_LOADING":
      return { ...state, isLoading: false };

    case "SET_CURRENT_CITY":
      return { ...state, currentCity: action.payload };

    case "ADD_CITY":
      return {
        ...state,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "REMOVE_CITY":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "REJECTED":
      return { ...state, isLoading: false, errorMsg: action.payload };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function CitiesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cities, isLoading, currentCity, error } = state;

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: "START_LOADING" }); // Start loading
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "SET_CITIES", payload: data }); // Update state(cities) with fetched data
      } catch (error) {
        dispatch({
          type: "REJECTED",
          payload: "OOPS! There was an error fetching cities data.",
        });
        console.error(error);
      } finally {
        dispatch({ type: "STOP_LOADING" }); // Stop loading, whether success or error
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    if (Number(id) === currentCity.id) return;

    dispatch({ type: "START_LOADING" }); // better to be outside the try block
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "SET_CURRENT_CITY", payload: data });
    } catch (error) {
      dispatch({
        type: "REJECTED",
        payload: "OOPS! There was an error loading current city data.",
      });
      console.error(error.message);
    } finally {
      dispatch({ type: "STOP_LOADING" });
    }
  }

  async function createCity(newCity) {
    dispatch({ type: "START_LOADING" }); // better to be outside the try block
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "ADD_CITY", payload: data });
    } catch (error) {
      dispatch({
        type: "REJECTED",
        payload: "OOPS! There was an error creating city.",
      });
      console.error(error.message);
    } finally {
      dispatch({ type: "STOP_LOADING" });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "START_LOADING" }); // better to be outside the try block
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "REMOVE_CITY", payload: id });
    } catch (error) {
      dispatch({
        type: "REJECTED",
        payload: "OOPS! There was an error creating city.",
      });
      console.error(error.message);
    } finally {
      dispatch({ type: "STOP_LOADING" });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext is used outside the provider!");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };
