import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
function Error({ message = "Something went wrong. Please try again!" }) {
  const buttonRef = useRef();
  useEffect(() => {
    buttonRef.current.focus(); // Automatically focus the button on load
  }, []);

  const handleClick = () => window.location.reload();

  return (
    <div className="p-6 text-center bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
      <p className="text-lg text-gray-700">{message}</p>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="mt-4 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:ring-2 focus:ring-red-400"
      >
        Reload Page
      </button>
    </div>
  );
}

export default Error;
