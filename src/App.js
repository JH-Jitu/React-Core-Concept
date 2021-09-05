import "./App.css";
import ButtonCount from "./components/HocConcept/ButtonCount";
import HoverClick from "./components/HocConcept/HoverClick";
import ButtonCountRenProps from "./components/RenderPropsConcept/ButtonCountRenProps";
import CounterRenProps from "./components/RenderPropsConcept/RenPropsCounter/CounterRenProps";
import HoverCountRenProps from "./components/RenderPropsConcept/HoverCountRenProps";
import CounterRenChild from "./components/RenderPropsConcept/RenPropsCounter/CounterRenChild";
import StateSending from "./components/ContextApiConcept/StateSending";
import StateSendReact from "./components/ReactContext/StateSendReact";

function App() {
  return (
    <>
      {/* HOC CONCEPT */}
      <div className="App">
        <p> **********Higher Order Concept Concept*********** </p>
        <ButtonCount></ButtonCount>
        <HoverClick></HoverClick>
      </div>
      <br /> <br />
      {/* Render Props Concept */}
      <div>
        <div className="App">
          <p> **********Render Props Concept*********** </p>
          <CounterRenProps
            renderFunc={(count, handleCount) => (
              <ButtonCountRenProps count={count} handleCount={handleCount} />
            )}
          />
          <CounterRenProps
            renderFunc={(count, handleCount) => (
              <HoverCountRenProps count={count} handleCount={handleCount} />
            )}
          />
        </div>
      </div>
      <br /> <br />
      {/* Render Props Another Pattern => Composition => Getting Property from Children */}
      <div>
        <div className="App">
          <p>
            {" "}
            *******Render Props Another Pattern ➡ Composition ➡ Getting Property
            from Children*******{" "}
          </p>
          <CounterRenChild>
            {(count, handleCount) => (
              <ButtonCountRenProps count={count} handleCount={handleCount} />
            )}
          </CounterRenChild>
          <CounterRenChild>
            {(count, handleCount) => (
              <HoverCountRenProps count={count} handleCount={handleCount} />
            )}
          </CounterRenChild>
        </div>
      </div>
      <br /> <br />
      {/* BY MAKING CUSTOM CONTEXT */}
      <div>
        <div className="App">
          <p> *******BY MAKING CUSTOM CONTEXT******* </p>
          <CounterRenChild>
            {(count, handleCount) => (
              <ButtonCountRenProps count={count} handleCount={handleCount} />
            )}
          </CounterRenChild>
          <StateSending />
        </div>
      </div>
      {/* By Using React Context */}
      <div>
        <div className="App">
          <p> *******BY MAKING CUSTOM CONTEXT******* </p>
          <CounterRenChild>
            {(count, handleCount) => (
              <ButtonCountRenProps count={count} handleCount={handleCount} />
            )}
          </CounterRenChild>
          <StateSendReact />
        </div>
      </div>
    </>
  );
}

export default App;
