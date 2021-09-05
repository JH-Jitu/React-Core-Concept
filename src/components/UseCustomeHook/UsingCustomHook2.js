import React from "react";
import useWindowWidth from "./CustomHooks/useWindowWidth";

const UsingCustomHook2 = () => {
  const isSmall = useWindowWidth(550);
  return (
    <div className={isSmall ? "Small" : "large"}>
      <h5>Custom Hook Using Component 2 ➡ (Argument 550 here)</h5>
      <p>This will change the className of the component: </p>
      <p>
        ClassName is now: <strong>{isSmall ? "Small" : "large"}</strong>
        <br /> To Check inspect it..
      </p>
    </div>
  );
};

export default UsingCustomHook2;
