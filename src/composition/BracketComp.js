import { Component } from "react";

class BracketComp extends Component {
  addBracket = (text) => `[${text}]`;
  render() {
    return this.props.children({ addBracket: this.addBracket });
  }
}

export default BracketComp;
