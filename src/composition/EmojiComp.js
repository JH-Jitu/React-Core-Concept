import { Component } from "react";

class EmojiComp extends Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
  render() {
    return this.props.children({ addEmoji: this.addEmoji });
  }
}

export default EmojiComp;
