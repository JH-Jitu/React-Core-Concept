import React, { Component } from "react";
import Button from "./Button";

class Clock extends Component {
  state = { date: new Date(), locale: "en-US" };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  handleClick = () => {
    this.state.locale === "en-US"
      ? this.setState({ locale: "bn-BD" })
      : this.setState({ locale: "en-US" });
  };
  render() {
    // console.log("Rendered Clock Component");
    const { date, locale } = this.state;
    return (
      <div>
        Hello World
        <h1>This is {date.toLocaleTimeString(locale)}</h1>
        <Button changes={this.handleClick} locale={locale} />
      </div>
    );
  }
}

export default Clock;
