import React, { createContext, useReducer } from "react";
import CounterUseState from "./CounterUseState";
import CounterUseReducer from "./CounterUseReducer";
import CounterReducerComplex from "./CounterReducerComplex";
import ComponentCheckSpreading from "./ForUseContext/ComponentCheckSpreading";
import FetchWithUseState from "./ForUseEffect/FetchWithUseState";
import FetchWithUseReducer from "./ForUseEffect/FetchWithUseReducer";

const initialState = {
  count: 0,
};

export const counterContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

const ReducerComponents = () => {
  const [countState, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>useReducer Concept</h4>
      <a
        href="https://github.com/JH-Jitu/React-Core-Concept/tree/react-hook-concept/src/components/UseReducerConcept"
        target="_blank"
        rel="noreferrer"
      >
        <button className="git"> 🔥Github Link🔥 </button>
      </a>

      <div className="reducer">
        <CounterUseState />
        <CounterUseReducer />
        <CounterReducerComplex />
      </div>

      <div className="reducer">
        <counterContext.Provider
          value={{ counterDispatch: dispatch, countState }}
        >
          <ComponentCheckSpreading />
        </counterContext.Provider>
      </div>
      <div className="reducer">
        <FetchWithUseState />
        <FetchWithUseReducer />
      </div>
    </div>
  );
};

export default ReducerComponents;
