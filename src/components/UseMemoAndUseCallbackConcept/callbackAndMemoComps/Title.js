import React, { memo } from "react";

const Title = () => {
  console.log("Rendered Title");
  return (
    <div>
      <p>This is Title </p>
    </div>
  );
};

export default memo(Title);
