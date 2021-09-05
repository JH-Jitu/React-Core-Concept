import React, { useContext } from "react";
import { counterContext } from "../ReducerComponents";

const CounterWithContextReducer = () => {
  const contextValues = useContext(counterContext);
  const { counterDispatch, countState } = contextValues;
  return (
    <div>
      <h5>Passing Data from Global: useReducer by using useContext</h5>
      <p>Value with the context: {countState.count}</p>
      <button onClick={() => counterDispatch({ type: "decrement", value: 1 })}>
        Decrement by 1
      </button>
      <button onClick={() => counterDispatch({ type: "increment", value: 1 })}>
        Increment by 1
      </button>
    </div>
  );
};

export default CounterWithContextReducer;
