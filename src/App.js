import Datasource from "./Datasource";
import Employee from "./Employee";
//import Exercise1 from "./exercise1";
import "./styles.css";
import Timer from "./Timer";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      {/* <Exercise1></Exercise1> */}
      <Employee message="Welcome to the Datasource of employees"></Employee>
      <br />
      <br />

      <Datasource></Datasource>
      {/* <Timer /> */}
    </div>
  );
}
