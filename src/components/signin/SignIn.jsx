import React, { Component } from "react";
import "./signin.scss";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.prevenDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <h2 className="title"> Already got an account ? </h2>
        <span className="subtitle"> Login with you email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          />

          <Button type="submit"> SIGN IN</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
