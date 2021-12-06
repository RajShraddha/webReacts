import React from "react";
import "./styles.css";

const emp1 = {
  empId: "001",
  empName: "Daniel Watson",
  age: 34,
  Experience: "3 years",
  Salary: "50000",
  achievements: "Bagged four hackathon prizes"
};

const emp2 = {
  empId: "002",
  empName: "Aleana D'Cruise",
  age: 21,
  Experience: "1 year",
  Salary: "25000",
  achievements: "Participant at college level hackathon"
};

class Employee extends React.Component {
  EmpArr = [emp1, emp2];

  state = {
    selectedEmp: null
  };

  createCard(emp) {
    var achievements = null;
    var note = null;

    if (emp.age < 25) {
      note = <span style={{ color: "crimson" }}>-fresher</span>;
    }

    if (this.state.selectedEmp === emp.empId) {
      achievements = (
        <p>
          <i>{emp.achievements}</i>
        </p>
      );
    }

    if (this.state.selectedEmp === null) {
      achievements = null;
    }

    return (
      <div className="cardHeader">
        <div key={emp.empId} className="card">
          <span id="content">
            <b>Name:</b> {emp.empName}
          </span>
          <br />
          <span id="content">
            <b>Experience:</b> {emp.Experience}
          </span>
          <br />
          <span id="content">
            <b>Salary:</b> {emp.Salary}
          </span>
          <br />
          <span id="content">
            <b>Age:</b> {emp.age}
          </span>
          {note}
          <br />
          <br />
          {achievements}
          <button
            onClick={() => this.setState({ selectedEmp: emp.empId })}
            className="btn btn-primary clickable"
          >
            Show achievements
          </button>
          <br />
          <br />
          <button
            onClick={() => this.setState({ selectedEmp: null })}
            className="btn btn-secondary clickable"
          >
            Hide achievements
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Employee Details</h3>
        <br />
        <h5>{this.props.message}</h5>
        {this.EmpArr.map((emp) => {
          return this.createCard(emp);
        })}
      </div>
    );
  }
}

export default Employee;
