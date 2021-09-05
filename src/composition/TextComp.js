import React from "react";

const TextComp = ({ addEmoji, addBracket }) => {
  let text = "Oh! This is awesome!";
  if (addEmoji) {
    text = addEmoji(text, "💘");
  }
  if (addBracket) {
    text = addBracket(text);
  }
  return <div>{text}</div>;
};

export default TextComp;
