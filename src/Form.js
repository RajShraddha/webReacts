import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      Salary: "",
      Achievements: "",
      formErrors: {},
      buttonActive: true
      // fieldValidity: {},
      // formValid: false
    };
  }

  validate = (event) => {
    if (Object.keys(this.state.formErrors).length > 0) {
      event.preventDefault();
    }
  };

  ValidateUsername = (event) => {
    var name = event.target.value;
    var formErrorsCopy = this.state.formErrors;
    var buttonStatus = this.state.buttonActive;

    // var fieldValidity = this.state.fieldValidity;
    this.setState({
      txtUsername: event.target.value
    });

    if (name.length < 5) {
      formErrorsCopy.txtUsernameErr = "Cannot be less than 5";
      buttonStatus = true;
      // fieldValidity.txtUsername = false;
    } else {
      delete formErrorsCopy["txtUsernameErr"];
      buttonStatus = false;
      // delete fieldValidity["txtUsername"];
    }

    this.setState({
      formErrors: formErrorsCopy,
      buttonActive: buttonStatus
      // formValid: fieldValidity.txtUsername
    });
    // this.setState({ formValid: fieldValidity.txtUsername})
  };

  validateSalary = (event) => {
    var sal = event.target.value;
    var formErrorsCopy = this.state.formErrors;

    this.setState({ Salary: event.target.value });

    if (isNaN(+sal)) {
      formErrorsCopy.Salary = "Should be a number";
    } else {
      delete formErrorsCopy["Salary"];
    }

    this.setState({
      formErrors: formErrorsCopy
      // formValid: fieldValidity.txtUsername
    });
  };

  render() {
    return (
      <form onSubmit={this.validate}>
        <label>Name </label>
        <input
          type="text"
          name="txtUsername"
          value={this.state.txtUsername}
          onChange={this.ValidateUsername}
        />
        <div id="errorMsg">{this.state.formErrors.txtUsernameErr}</div>

        <br />
        <label>Salary </label>
        <input
          type="text"
          name="Salary"
          value={this.state.Salary}
          onChange={this.validateSalary}
        />
        <div id="errorMsg">{this.state.formErrors.Salary}</div>
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={this.state.buttonActive}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
