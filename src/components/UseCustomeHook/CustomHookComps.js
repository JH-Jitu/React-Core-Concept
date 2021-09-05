import React from "react";
import UsingCustomHook1 from "./UsingCustomHook1";
import UsingCustomHook2 from "./UsingCustomHook2";

const CustomHookComps = () => {
  return (
    <div>
      <h4>Custom Hook Concept</h4>
      <a
        href="https://github.com/JH-Jitu/React-Core-Concept/tree/react-hook-concept/src/components/UseCustomeHook"
        target="_blank"
        rel="noreferrer"
      >
        <button className="git"> 🔥Github Link🔥 </button>
      </a>
      <UsingCustomHook1 />
      <br />
      <UsingCustomHook2 />
    </div>
  );
};

export default CustomHookComps;
