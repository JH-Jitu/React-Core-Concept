import React from "react";
import Counter from "./HOC/Counter";

const HoverClick = ({ count, handleCount }) => {
  return (
    <div>
      <h1 onMouseOver={handleCount}>Click {count} times</h1>
    </div>
  );
};

export default Counter(HoverClick);
