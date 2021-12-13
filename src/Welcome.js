import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <br />
        <h1 style={{ textAlign: "center" }}>WELCOME TO WebReacts</h1>

        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/employee"}>Employee Details</Link>
          </li>
          <li>
            <Link to={"/datasource"}>Employee Props</Link>
          </li>

          <li>
            <Link to={"/ParamHandle"}>Check Id</Link>
          </li>
        </ul>

        {/* <Link to={"/Form"}>
          <button type="button">Click to get the form</button>
        </Link> */}
      </div>
    );
  }
}

export default Welcome;

// import { Link, Router } from 'react-router-dom';
