import React, { useState } from "react";

const InputChecker = () => {
  const [place, setPlace] = useState("");
  const [detected, setDetected] = useState("");

  const handleInput = (e) => {
    const selectPlace = e.target.value;
    const warns = selectPlace.includes("Chi")
      ? "You are going to write about Chittagong"
      : null;
    setPlace(selectPlace);
    setDetected(warns);
  };

  return (
    <div>
      <div>
        <p>Talking about Place: {place}</p>
        <input onChange={handleInput} value={place} type="text" />
      </div>
      <p>{detected || "Nothing about Chittagong"} </p>
    </div>
  );
};

export default InputChecker;
