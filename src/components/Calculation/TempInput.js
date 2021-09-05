import React from "react";

const scaleNames = {
  c: "celsius",
  f: "fahrenheit",
};
const TempInput = ({ temperature, handleChange, scale }) => {
  return (
    <div>
      <p>The Temperature is in: {scaleNames[scale]}</p>
      <input
        type="text"
        value={temperature}
        onChange={(e) => handleChange(e, scale)}
      />
    </div>
  );
};

export default TempInput;
