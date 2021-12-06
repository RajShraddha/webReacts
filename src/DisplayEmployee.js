import React from "react";
import "./styles.css";

class DisplayEmployee extends React.Component {
  state = {
    selectedEmp: null
  };

  createCard() {
    var note = null;
    var selectedEmp = null;
    var achievements = null;
    // var noShow=false;

    // if(this.props.emp.age<25){
    //   note=<p>-Fresher</p>
    // }

    if (this.state.selectedEmp === this.props.empId) {
      achievements = (
        <p>
          <i>{this.props.achievements}</i>
        </p>
      );
    }

    if (this.state.selectedEmp === null) {
      achievements = null;
    }

    return (
      <div className="cardHeader">
        <div key={this.props.empId} className="card">
          <span id="content">
            <b>Name:</b> {this.props.empName}
          </span>
          <br />
          {/* <span>Experience:{this.props.Experience}</span>
          <br /> */}
          <span id="content">
            <b>Salary:</b>
            {this.props.salary}
          </span>
          <br />
          {/* <span>Age:{this.props.age}</span>
          {note} */}
          <br />
          <br />
          {achievements}
          <button
            onClick={() => this.setState({ selectedEmp: this.props.empId })}
            className="btn btn-secondary clickable"
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
    return <div>{this.createCard()}</div>;
  }
}
export default DisplayEmployee;
