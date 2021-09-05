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
    <div className="container my-5">
      <div align="center">
        <h5>Let's Explore the World with React HOOK!</h5>
        <a
          href="https://github.com/JH-Jitu/React-Core-Concept/tree/react-hook-concept/src"
          target="_blank"
          rel="noreferrer"
        >
          <button className="git">
            {" "}
            🔥🔗 Go to Github To see the Code 🔥🔗{" "}
          </button>
        </a>
      </div>
      <br />
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
