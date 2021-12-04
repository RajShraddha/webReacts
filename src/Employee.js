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
      note = <span>-fresher</span>;
    }

    if (this.state.selectedEmp === emp.empId) {
      achievements = (
        <p>
          <i>{emp.achievements}</i>
        </p>
      );
    }

    return (
      <div className="cardHeader">
        <div key={emp.empId} className="card">
          <span>Name:{emp.empName}</span>
          <br />
          <span>Experience:{emp.Experience}</span>
          <br />
          <span>Salary:{emp.Salary}</span>
          <br />
          <span>Age:{emp.age}</span>
          {note}
          <br />
          <br />
          {achievements}
          <button
            onClick={() => this.setState({ selectedEmp: emp.empId })}
            className="btn btn-primary"
          >
            Show achievements
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Employee Details</h3>
        {this.EmpArr.map((emp) => {
          return this.createCard(emp);
        })}
      </div>
    );
  }
}

export default Employee;
