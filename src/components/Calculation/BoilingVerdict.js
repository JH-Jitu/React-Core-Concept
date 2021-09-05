import React from "react";

const BoilingVerdict = ({ temperature }) => {
  return (
    <div>
      {temperature >= 100 ? <p>Water will boil</p> : <p>Water will not boil</p>}
    </div>
  );
};

export default BoilingVerdict;
