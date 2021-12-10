import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      formErrors: {
        txtUsernameErr: ""
      },
      fieldValidity: {
        txtUsername: false
      },
      formValid: false
    };
  }
  ValidateUsername = (event) => {
    var name = event.target.value;
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    this.setState({ txtUsername: event.target.value });
    if (name.length < 5) {
      formErrors.txtUsernameErr = "Cannot be less than 5";
      fieldValidity.txtUsername = false;
    } else {
      formErrors.txtUsernameErr = "";
      fieldValidity.txtUsername = true;
    }
    this.setState({
      formErrors: formErrors,
      formValid: fieldValidity.txtUsername
    });
    // this.setState({ formValid: fieldValidity.txtUsername})
  };
  render() {
    return (
      <form>
        <input
          type="text"
          name="txtUsername"
          value={this.state.txtUsername}
          onChange={this.ValidateUsername}
        />
        <div id="errorMsg">{this.state.formErrors.txtUsernameErr}</div>
      </form>
    );
  }
}

export default Form;
