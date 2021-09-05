import React, { useState } from "react";

const CounterUseState = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };
  return (
    <div>
      <h5>Counter With UseState</h5>
      <p>The Counter Value is: {count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default CounterUseState;
