import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";
import Welcome from "./Welcome";
import Datasource from "./Datasource";
import Employee from "./Employee";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Welcome></Welcome>
      </div>
      <Switch>
        <Route path="/" component={Employee} />
        <Route path="/employee" component={Employee} />
        <Route path="/datasource" component={Datasource} />
      </Switch>
    </BrowserRouter>
  );
}

//export default App;

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
