import React, { Component } from "react";
import "./index.scss";

const initialState = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  confirmpassword: "",
  firstnameError: "",
  lastnameError: "",
  usernameError: "",
  emailError: "",
  passwordError: "",
  confirmpasswordError: ""
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  validate = () => {
    let usernameError = "";
    let emailError = "";
    let firstnameError = "";
    let lastnameError = "";
    let passwordError = "";
    let confirmpasswordError = "";

    if (this.state.firstname.length < 1) {
      firstnameError = "firstname should not be empty";
    }
    if (this.state.firstname.match(/[^a-zA-z]+/)) {
      usernameError = "invalid firstname: firstname only contain alphabates";
    }

    if (this.state.lastname.length < 1) {
      lastnameError = "lastname should not be empty";
    }

    if (this.state.lastname.match(/[^a-zA-z]+/)) {
      lastnameError = "invalid lastname: lastname only contain alphabates";
    }

    if (this.state.username.length < 1) {
      usernameError = "username should not be empty";
    } else if (
      this.state.username.length < 6 ||
      this.state.username.length > 10
    ) {
      usernameError = "username must be 6-9 long";
    }
    if (this.state.username.match(/[^a-zA-z0-9]+/)) {
      usernameError =
        "invalid username: username only contain alphabates and numbers";
    }
    if (!this.state.email.includes(".")) {
      emailError = "invalid email";
    }
    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (this.state.email.length < 1) {
      emailError = "email should not be empty";
    }

    if (this.state.password.length < 7) {
      passwordError = "password must be greater than 6";
    }
    if (this.state.password.length < 1) {
      passwordError = "password should not be empty";
    }
    if (this.state.password.length !== this.state.confirmpassword.length) {
      confirmpasswordError = "password does not match";
    }
    if (this.state.confirmpassword.length < 1) {
      confirmpasswordError = "confirm password should not be empty";
    }

    if (
      firstnameError ||
      lastnameError ||
      usernameError ||
      emailError ||
      passwordError ||
      confirmpasswordError
    ) {
      this.setState({
        firstnameError,
        lastnameError,
        usernameError,
        emailError,
        passwordError,
        confirmpasswordError
      });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    // debugger;
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear form
      this.setState(initialState);
    }
    // console.log(this.state);
    // alert(event.target.username.value);
  };

  handleChange = event => {
    // console.log(event.target.name);
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  render() {
    return (
      <div className="signUp">
        <div className="signUp__content">
          <form
            className="myForm"
            // method="post"
            // action=""
            onSubmit={this.handleSubmit}
            noValidate
          >
            <input
              type="text"
              name="firstname"
              placeholder="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
              //   required
            ></input>
            <br />
            <div style={{ color: "red" }}>{this.state.firstnameError}</div>

            <input
              type="text"
              name="lastname"
              placeholder="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
              //   required
            ></input>
            <br />
            <div style={{ color: "red" }}>{this.state.lastnameError}</div>

            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
              //   required
            ></input>
            <br />
            <div style={{ color: "red" }}>{this.state.usernameError}</div>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
              //   required
            ></input>
            <br />
            <div style={{ color: "red" }}>{this.state.emailError}</div>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
              //   required
            ></input>
            <br />
            <div style={{ color: "red" }}>{this.state.passwordError}</div>
            <input
              type="password"
              name="confirmpassword"
              placeholder="confirmpassword"
              value={this.state.confirmpassword}
              onChange={this.handleChange}
              //   required
            ></input>
            <br />
            <div style={{ color: "red" }}>
              {this.state.confirmpasswordError}
            </div>
            <input type="submit" value="SignUp"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
