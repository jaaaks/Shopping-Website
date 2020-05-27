import React, { Component } from "react";
import "../styles/login.css";
import Logo from "../styles/icons8-openid-500.png";
import axios from 'axios';
import { Link } from "react-router-dom";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const User = {
      email,
      password,
    };
    axios
      .post("http://localhost:5000/api/users/login", User)
      .then(() => console.log("Logged in"))
      .catch((err) => {
        console.error(err);
      });
  };
  render() {
    return (
      <div>
        <div className="my-component"></div>
        <div className="login-form">
          <div className="icon">
            <img src={Logo} width="75" height="75"></img>
          </div>
          <div className="heading">
            <h2> Login</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                type="email"
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Email"
                className="name"
              />
              <input
                type="password"
                onChange={(e) => this.setState({ password: e.target.value })}
                placeholder="Password"
              />

              <label className="container">
                {" "}
                Remember Me
                <input type="checkbox" className="cb" />
                <span className="checkmark"></span>
              </label>
              <input type="submit" className="button1" value="Submit" />
            </form>
            <Link to="/register" className="link-login">
              Not a member? Register Here
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
