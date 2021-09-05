import React, { Component } from "react";
import Content from "./Content";
import themeContext from "./Context/AllContext/AllContext";

class StateSending extends Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme } = this.state;
    return (
      <div>
        <themeContext.Provider value={{ theme }}>
          <Content />
        </themeContext.Provider>
      </div>
    );
  }
}

export default StateSending;
