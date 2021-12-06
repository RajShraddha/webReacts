import React from "react";
import DisplayEmployee from "./DisplayEmployee";

class Datasource extends React.Component {
  state = {
    emp1: {
      empId: "001",
      empName: "Raj",
      salary: "45000",
      achievements: "won pl/sql hackathon"
    },

    emp2: {
      empId: "002",
      empName: "Simran",
      salary: "55000",
      achievements: "No major achievements"
    }
  };

  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>
          Employee Details <span> (using PROPS)</span>
        </h3>
        <br />
        <div className="cardHeader">
          <DisplayEmployee
            empId={this.state.emp1.empId}
            empName={this.state.emp1.empName}
            salary={this.state.emp1.salary}
            achievements={this.state.emp1.achievements}
          ></DisplayEmployee>

          <DisplayEmployee
            empId={this.state.emp2.empId}
            empName={this.state.emp2.empName}
            salary={this.state.emp2.salary}
            achievements={this.state.emp2.achievements}
          ></DisplayEmployee>
        </div>
      </div>
    );
  }
}

export default Datasource;
