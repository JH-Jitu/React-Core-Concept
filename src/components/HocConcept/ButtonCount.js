import React from "react";
import Counter from "./HOC/Counter";

const ButtonCount = ({ count, handleCount }) => {
  return (
    <div>
      <button onClick={handleCount}>Click {count} times</button>
    </div>
  );
};

export default Counter(ButtonCount);
