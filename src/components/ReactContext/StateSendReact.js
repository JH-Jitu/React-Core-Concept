import React, { Component } from "react";
import ReactThemeContext from "./AllReactContext/ReactContext";
import ReactContent from "./ReactContent";

class StateSendReact extends Component {
  state = {
    theme: "dark",
    switchTheme: () => {
      this.setState(({ theme }) => {
        if (theme === "dark") {
          return {
            theme: "light",
          };
        } else {
          return {
            theme: "dark",
          };
        }
      });
    },
  };
  render() {
    const { theme, switchTheme } = this.state;
    return (
      <div>
        <ReactThemeContext.Provider value={{ theme, switchTheme }}>
          <ReactContent />
        </ReactThemeContext.Provider>
      </div>
    );
  }
}

export default StateSendReact;
