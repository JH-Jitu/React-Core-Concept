import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
};

const CounterUseReducer = () => {
  const [countState, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h5>Counter With useReducer</h5>
      <p>The Counter Value is: {countState}</p>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("increment")}>Increment</button>
    </div>
  );
};

export default CounterUseReducer;
