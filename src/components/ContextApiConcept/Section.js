import React from "react";
import CounterRenChild from "./../RenderPropsConcept/RenPropsCounter/CounterRenChild";
import HoverCountContext from "./HoverCountContext";
import themeContext from "./Context/AllContext/AllContext";

const Section = () => {
  //   const Context = createContext();
  return (
    <div>
      <CounterRenChild>
        {(count, handleCount) => (
          <themeContext.Consumer>
            {({ theme }) => (
              <HoverCountContext
                count={count}
                handleCount={handleCount}
                theme={theme}
              />
            )}
          </themeContext.Consumer>
        )}
      </CounterRenChild>
    </div>
  );
};

export default Section;
