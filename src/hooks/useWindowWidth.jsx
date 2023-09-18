import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const DESKTOP_BREAKPOINT = 700;

  // useEffect helper for getting current window width
  const getWindowWidth = () => {
    return window.innerWidth;
  };

  // Determine which carousel to render
  const [currentWindowWidth, setCurrentWindowWidth] = useState(
    getWindowWidth()
  );

  // Always check window width changes
  useEffect(() => {
    const updateWidth = () => {
      setCurrentWindowWidth(getWindowWidth());
    };
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [currentWindowWidth]);
  return { DESKTOP_BREAKPOINT, currentWindowWidth };
};

export default useWindowWidth;
