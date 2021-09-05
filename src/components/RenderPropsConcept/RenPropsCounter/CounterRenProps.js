import { Component } from "react";

class CounterRenProps extends Component {
  state = {
    count: 0,
  };
  handleCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    const { renderFunc } = this.props;
    const { count } = this.state;
    return renderFunc(count, this.handleCount);
  }
}

export default CounterRenProps;
