import React, { Component, main } from "react";
import ReactDOM from "react-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import icon from "./buttons.png";
import "./App.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div id="parent">
        <div id="heading">
          <h1>Billy and Austin's pay-to-use media server</h1>
          <h3>Please login to continue</h3>
        </div>
        <div className="icon">
          <img src={icon} width="200"/>
        </div>
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Send us btc
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
