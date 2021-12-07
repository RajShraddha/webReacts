import React from "react";
import { Routes, Route } from "react-router";
import "./styles.css";
import Welcome from "./Welcome";
import Datasource from "./Datasource";
import Employee from "./Employee";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/datasource" element={<Datasource />} />
        </Routes>
      </div>
    );
  }
}

export default App;

//import Timer from "./Timer";
//import Exercise1 from "./exercise1";
//import { render } from "react-dom";
// //{/* <h1>Hello CodeSandbox</h1>
//     <h2>Start editing to see some magic happen!</h2> */}
//     {/* <Exercise1></Exercise1> */}
//     {/* <Employee message="Welcome to the Datasource of employees"></Employee>
//     <br />
//     <br />

//     <Datasource></Datasource> */}
//     {/* <Timer /> */}
