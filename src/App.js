import "./App.css";
import Clock from "./components/Clock";
import Form from "./components/Form";
// import List from "./components/List";
import Calculation from "./components/Calculation/Calculation";

function App() {
  return (
    <div className="App">
      <Calculation />
      <br /> <br />
      <Clock />
      <br />
      <br />
      <Form />
      <br />
      <br />
      {/* <List /> */}
    </div>
  );
}

export default App;
