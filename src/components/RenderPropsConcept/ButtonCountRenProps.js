import React from "react";

const ButtonCountRenProps = ({ count, handleCount }) => {
  return (
    <div>
      <button onClick={handleCount}>Click {count} times</button>
    </div>
  );
};

export default ButtonCountRenProps;
