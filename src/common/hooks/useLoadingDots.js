import { useState, useEffect } from "react";

const dotsIntervalInMs = 300;

function useLoadingDots() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prev) => (prev === "..." ? "" : prev + "."));
    }, dotsIntervalInMs);

    return () => clearInterval(intervalId);
  }, []);

  return dots;
}

export default useLoadingDots;
