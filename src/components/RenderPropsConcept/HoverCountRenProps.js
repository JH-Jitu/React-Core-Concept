import React from "react";

const HoverCountRenProps = ({ count, handleCount }) => {
  return (
    <div>
      <h1 onMouseOver={handleCount}>Click {count} times</h1>
    </div>
  );
};

export default HoverCountRenProps;
