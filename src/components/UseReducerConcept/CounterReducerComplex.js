import React, { useReducer } from "react";

const initialState = {
  count: 0,
  count2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.value };

    case "decrement":
      return { ...state, count: state.count - action.value };

    case "increment2":
      return { ...state, count2: state.count2 + action.value };

    case "decrement2":
      return { ...state, count2: state.count2 - action.value };

    default:
      return state;
  }
};

const CounterReducerComplex = () => {
  const [countState, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h5>Complex Counter With useReducer</h5>
      <p>The Counter Value is: {countState.count}</p>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement by 1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment by 1
      </button>
      <br />
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment by 5
      </button>
      {/* Individual Increment/Decrement */}
      <div>
        <p>The Counter Value is: {countState.count2}</p>
        <button onClick={() => dispatch({ type: "decrement2", value: 6 })}>
          Decrement by 6
        </button>
        <button onClick={() => dispatch({ type: "increment2", value: 6 })}>
          Increment by 6
        </button>
      </div>
    </div>
  );
};

export default CounterReducerComplex;
