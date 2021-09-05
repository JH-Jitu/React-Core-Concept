import React, { memo } from "react";

const ShowCount = ({ title, count }) => {
  console.log(`rendered ${title}`);
  return (
    <div>
      <p>
        {title} is {count}{" "}
      </p>
    </div>
  );
};

export default memo(ShowCount);
