// If Functional Component; => For Class component details in the last of this function

import React, { useContext } from "react";
import ReactHover from "./ReactHover";
import ReactThemeContext from "./AllReactContext/ReactContext";
import CounterRenChild from "../RenderPropsConcept/RenPropsCounter/CounterRenChild";

const ReactSection = () => {
  //   const Context = createContext();
  const context = useContext(ReactThemeContext);
  const { theme, switchTheme } = context;
  return (
    <div>
      <CounterRenChild>
        {(count, handleCount) => (
          <ReactHover
            count={count}
            handleCount={handleCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </CounterRenChild>
    </div>
  );
};

export default ReactSection;

// ............................Using Context in Class Component......................
// .........................................................................
// For Class Component => Using Context in Class Component

// import React from "react";
// import ReactHover from "./ReactHover";
// import ReactThemeContext from "./AllReactContext/ReactContext";
// import CounterRenChild from "../RenderPropsConcept/RenPropsCounter/CounterRenChild";

// class ReactSection extends React.Component {
//   //   const Context = createContext();
//   render() {
//     const { theme, switchTheme } = this.context;
//     return (
//       <div>
//         <CounterRenChild>
//           {(count, handleCount) => (
//             <ReactHover
//               count={count}
//               handleCount={handleCount}
//               theme={theme}
//               switchTheme={switchTheme}
//             />
//           )}
//         </CounterRenChild>
//       </div>
//     );
//   }
// }

// export default ReactSection;

// ReactSection.contextType = ReactThemeContext;
