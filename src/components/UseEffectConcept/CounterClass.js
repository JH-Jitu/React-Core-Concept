import React, { Component } from "react";

export default class CounterClass extends Component {
  state = {
    count: 0,
    date: new Date(),
  };

  //   For the first time the component is Rendering
  componentDidMount() {
    const { count } = this.state;
    document.title = count;
    this.interval = setInterval(this.tick, 1000);
  }

  //   Component will update when the count will be changed
  componentDidUpdate() {
    const { count } = this.state;
    document.title = count;
  }

  //   Component will unmount when and the timer will be cleared. Otherwise, there will be memory leaked because of not closing the timer
  componentWillUnmount() {
    // console.log("Timer Cleared");
    clearInterval(this.interval);
  }

  tick = () => {
    // console.log("clock ticking");
    this.setState({ date: new Date() });
  };

  handleCount = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    const { date } = this.state;
    return (
      <div>
        <p> Hello World</p>
        <p>Time: {date.toLocaleTimeString()}</p>
        <button type="button" onClick={this.handleCount}>
          Click to increment title
        </button>
      </div>
    );
  }
}
