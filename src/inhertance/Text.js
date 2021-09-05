import Emoji from "./Emoji";

class Text extends Emoji {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    const text = "Today is beautiful";
    const newText = this.addEmoji(text, "💘");
    return super.render(newText);
  }
}

export default Text;
