import React, { useEffect } from "react";
import { useState } from "react";

const CounterFunctional = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    document.title = `React Hook => 😎 ${count}`;
  }, [count]);

  useEffect(() => {
    const timer = setInterval(tick, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const tick = () => {
    // console.log("clock ticking");
    setDate(new Date());
  };

  const handleCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <h3>useState and useEffect concept</h3>
      <p>Hello This is functional Component</p>
      <p>Time: {date.toLocaleTimeString()}</p>
      <button onClick={handleCount}>Click here to increment title</button>
    </div>
  );
};

export default CounterFunctional;
