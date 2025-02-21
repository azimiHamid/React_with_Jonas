import { useEffect, useRef } from "react";

export function useOutsideClick(close, listenCapturing = true) {
  const ref = useRef(); // Create ref inside the hook

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) close();
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [close, listenCapturing]);

  return ref; // Return ref so it can be used in the component
}
