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
        </ul>
      </div>
    );
  }
}

export default Welcome;

// import { Link, Router } from 'react-router-dom';
