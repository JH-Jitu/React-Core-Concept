import React, { Component } from "react";

class Emoji extends Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
  render(overrides) {
    let text = "This is the new World";
    if (overrides) {
      text = overrides;
    }
    return (
      <div>
        {" "}
        <p>{text}</p>{" "}
      </div>
    );
  }
}

export default Emoji;
