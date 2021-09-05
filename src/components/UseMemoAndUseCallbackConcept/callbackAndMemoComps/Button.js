import React, { memo } from "react";

const Button = ({ handleCount, children }) => {
  console.log(`Rendered button ${children}`);
  return (
    <div>
      <button onClick={handleCount}>{children}</button>
    </div>
  );
};

export default memo(Button);
