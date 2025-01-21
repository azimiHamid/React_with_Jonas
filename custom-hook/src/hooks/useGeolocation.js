/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";

// export function useGeolocation() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [position, setPosition] = useState({});
//   const [error, setError] = useState(null);

//   function getPosition() {
//     if (!navigator.geolocation) {
//       setError("Your browser does not support geolocation");
//       return;
//     }
//     setIsLoading(true);
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         setPosition({
//           lat: pos.coords.latitude,
//           lng: pos.coords.longitude,
//         });
//         setIsLoading(false);
//       },
//       (error) => {
//         setError(error.message);
//         setIsLoading(false);
//       }
//     );
//   }

//   return { isLoading, position, error, getPosition };
// }

const initialState = {
  isLoading: false,
  position: {},
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_IS_LOADING":
      return { ...state, isLoading: !state.isLoading };

    default:
      throw new Error("Unknown action type!");
  }
}

export function useGeolocation() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [position, setPosition] = useState({});
  // const [error, setError] = useState(null);

  useReducer();

  function getPosition() {
    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation");
      return;
    }
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
