import { useEffect, useRef, useState } from "react";

/* eslint-disable react/prop-types */
function Error({ message = "Something went wrong. Please try again!" }) {
  const [isOpen, setIsOpen] = useState(true);
  const buttonRef = useRef();
  const FOCUS_DELAY = 500;

  useEffect(() => {
    const timer = setTimeout(() => buttonRef.current.focus(), FOCUS_DELAY);
    document.title = "Error";
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    document.title = "Quiz | Advanced React";
    setIsOpen(false);
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    isOpen && (
      <div
        className="p-6 text-center bg-[#353535] rounded-lg shadow-lg"
        role="alert"
      >
        <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-lg text-gray-100">{message}</p>

        <div className="flex gap-3">
          <button
            onClick={handleReload}
            className="mt-4 px-4 py-2 text-white rounded bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-red-400"
            aria-label="Reload the page"
          >
            Reload
          </button>
          <button
            ref={buttonRef}
            onClick={handleDismiss}
            className="mt-4 px-4 py-2 text-white rounded hover:bg-red-600 focus:ring-2 focus:ring-red-400"
            aria-label="Dismiss error message"
          >
            Dismiss
          </button>
        </div>
      </div>
    )
  );
}

export default Error;
