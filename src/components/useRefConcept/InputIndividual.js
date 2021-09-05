import React, { forwardRef } from "react";

const InputIndividual = ({ type, placeholder }, ref) => {
  return (
    <div>
      <input ref={ref} type={type} placeholder={placeholder} />
    </div>
  );
};

const forwardInput = forwardRef(InputIndividual);
export default forwardInput;
