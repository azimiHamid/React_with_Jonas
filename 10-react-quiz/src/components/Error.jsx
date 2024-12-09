import { useEffect, useRef, useState } from "react";

/* eslint-disable react/prop-types */
function Error({ message = "Something went wrong. Please try again!" }) {
  const [isOpen, setIsOpen] = useState(true);
  const buttonRef = useRef();
  useEffect(() => {
    setTimeout(() => buttonRef.current.focus(), 500);
    buttonRef.current.style.background = "#DC2626";
  }, []);

  const handleClick = () => setIsOpen(false);

  return (
    isOpen && (
      <div className="p-6 text-center bg-[#353535] rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-lg text-gray-100">{message}</p>
        <button
          ref={buttonRef}
          onClick={handleClick}
          className="mt-4 px-4 py-2 text-white rounded hover:bg-red-600 focus:ring-2 focus:ring-red-400"
        >
          Close
        </button>
      </div>
    )
  );
}

export default Error;
