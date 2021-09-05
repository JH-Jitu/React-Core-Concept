import React from "react";

const HoverCountContext = ({ count, handleCount, theme }) => {
  const style =
    theme === "dark" ? { backgroundColor: "#000000", color: "#ffffff" } : null;
  return (
    <div style={style}>
      <h1 onMouseOver={handleCount}>Click {count} times</h1>
    </div>
  );
};

export default HoverCountContext;
