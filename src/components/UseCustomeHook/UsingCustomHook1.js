import React from "react";
import useWindowWidth from "./CustomHooks/useWindowWidth";

const UsingCustomHook1 = () => {
  const small = useWindowWidth(700);

  return (
    <div>
      <h5>Custom Hook Using Component 1</h5>
      <p>
        This is <strong>{small ? "Small" : "large"}</strong> device ➡ (Argument
        700 here)
      </p>
    </div>
  );
};

export default UsingCustomHook1;
