import React, { useCallback, useEffect, useState } from "react";

const useWindowWidth = (screenSize) => {
  const [small, setSmall] = useState(false);

  const widthDetector = useCallback(() => {
    setSmall(window.innerWidth < screenSize);
  }, [screenSize]);

  useEffect(() => {
    widthDetector();
    window.addEventListener("resize", widthDetector);
    return () => {
      window.removeEventListener("resize", widthDetector);
    };
  }, [widthDetector]);

  return small;
};

export default useWindowWidth;
