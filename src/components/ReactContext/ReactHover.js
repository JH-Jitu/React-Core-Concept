import React from "react";

const ReactHover = ({ count, handleCount, theme, switchTheme }) => {
  const style =
    theme === "dark" ? { backgroundColor: "#000000", color: "#ffffff" } : null;
  return (
    <div style={style}>
      <h1 onMouseOver={handleCount}>Click {count} times</h1>
      <button onClick={switchTheme}>Click to switch theme</button>
    </div>
  );
};

export default ReactHover;
