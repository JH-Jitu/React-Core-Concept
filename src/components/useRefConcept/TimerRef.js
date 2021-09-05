import React, { useEffect, useRef } from "react";
import { useState } from "react";

const TimerRef = () => {
  const [date, setDate] = useState(new Date());
  const [clearTimer, setClearTimer] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(tick, 1000);
    setClearTimer(false);
    return () => {
      clearInterval(timerRef.current);
      setClearTimer(true);
    };
  }, []);

  const tick = () => {
    // console.log("clock ticking");
    setDate(new Date());
  };

  const handleClick = () => {
    if (!clearTimer) {
      clearInterval(timerRef.current);
      setClearTimer(true);
    } else {
      timerRef.current = setInterval(tick, 1000);
      setClearTimer(false);
    }
  };

  return (
    <div>
      <p>Hello This is functional Component</p>
      <p>Time: {date.toLocaleTimeString()}</p>
      <button onClick={handleClick} type="button">
        {clearTimer ? "Start" : "Stop"} Clock
      </button>
    </div>
  );
};

export default TimerRef;
