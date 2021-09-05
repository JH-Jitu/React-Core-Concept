import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const state = [];
let stateIndex = -1;

const useState = (defaultValue) => {
  const currentIndex = ++stateIndex;

  if (state[currentIndex]) {
    return state[currentIndex];
  }

  const setValue = (newValue) => {
    state[currentIndex][0] = newValue;
    jituFunction();
  };
  const returnArray = [defaultValue, setValue];
  state[currentIndex] = returnArray;
  return returnArray;
};

const App = () => {
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

const jituFunction = () => {
  stateIndex = -1;
  ReactDOM.render(<App />, document.getElementById("root"));
};
jituFunction();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
