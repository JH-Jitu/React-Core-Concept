import "./App.css";
// import InputChecker from "./components/UseStateConcept/InputChecker";
// import CounterClass from "./components/UseEffectConcept/CounterClass";
import { useState } from "react";
import CounterFunctional from "./components/UseEffectConcept/CounterFunctional";
import AllCallBackAndMemo from "./components/UseMemoAndUseCallbackConcept/AllCallBackAndMemo";
import FocusFirst from "./components/useRefConcept/FocusFirst";
import ReducerComponents from "./components/UseReducerConcept/ReducerComponents";
import CustomHookComps from "./components/UseCustomeHook/CustomHookComps";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <p align="center">Let's Explore the World with React HOOK!</p>
      <div className="concept">
        {/* <InputChecker /> */}
        {/* {show && <CounterClass />} */}
        {show && <CounterFunctional />}
        <button onClick={() => setShow((prevState) => !prevState)}>
          {show ? "Hide Counter" : "Show Counter"}
        </button>
      </div>{" "}
      <br /> <br />
      {/* For Callback and Memo */}
      <div className="concept">
        <AllCallBackAndMemo />
      </div>
      <br /> <br />
      {/* For useRef */}
      <div className="concept">
        <FocusFirst />
      </div>
      <br /> <br />
      {/* For useReducer */}
      <div className="concept">
        <ReducerComponents />
      </div>
      <br /> <br />
      {/* For Custom Hook */}
      <div className="concept">
        <CustomHookComps />
      </div>
    </div>
  );
}

export default App;
