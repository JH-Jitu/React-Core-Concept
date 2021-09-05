import "./App.css";
import EmojiComp from "./composition/EmojiComp";
import TextComp from "./composition/TextComp";
import Text from "./inhertance/Text";
import BracketComp from "./composition/BracketComp";

function App() {
  return (
    <>
      {/* Inheritance */}
      <div>
        <Text />
      </div>

      {/* Composition */}
      <div>
        <EmojiComp>
          {({ addEmoji }) => (
            <BracketComp>
              {({ addBracket }) => (
                <TextComp addEmoji={addEmoji} addBracket={addBracket} />
              )}
            </BracketComp>
          )}
        </EmojiComp>
      </div>

      <br />
      {/* Call the Text Component Freely Without the Emoji Component*/}
      <div>
        <p>Without Calling the Emoji or Bracket Component: </p>
        <TextComp />
      </div>
    </>
  );
}

export default App;
