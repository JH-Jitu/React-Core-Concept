import React from "react";

const Counter = (OriginalComponent) => {
  class NewCounter extends React.Component {
    state = {
      count: 0,
    };
    handleCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };
    render() {
      const { count } = this.state;
      return <OriginalComponent count={count} handleCount={this.handleCount} />;
    }
  }

  // export default NewCounter;
  return NewCounter;
};

export default Counter;
