import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import { celToFar, convertTo, farToCell } from "./lib/converter";
import TempInput from "./TempInput";

class Calculation extends Component {
  state = { temperature: "", scale: "" };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convertTo(temperature, farToCell) : temperature;
    const fahrenheit =
      scale === "c" ? convertTo(temperature, celToFar) : temperature;
    return (
      <div>
        <TempInput
          temperature={celsius}
          handleChange={this.handleChange}
          scale="c"
        />
        <TempInput
          temperature={fahrenheit}
          handleChange={this.handleChange}
          scale="f"
        />
        <p>Comment: </p>
        <BoilingVerdict temperature={temperature} />
      </div>
    );
  }
}

export default Calculation;
