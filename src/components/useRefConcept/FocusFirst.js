import React, { useEffect, useRef } from "react";
import InputIndividual from "./InputIndividual";
import TimerRef from "./TimerRef";

const FocusFirst = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h3>useRef Concept</h3>
      <p>Check out the input man 😉</p>
      {/* useForward Case of useRef */}
      <InputIndividual
        ref={inputRef}
        type="text"
        placeholder="Focus at first"
      />

      {/* Normal Case of useRef */}
      {/* <input ref={inputRef} type="text" /> */}

      {/* To stop the clock from the component button */}
      <TimerRef />
    </div>
  );
};

export default FocusFirst;
