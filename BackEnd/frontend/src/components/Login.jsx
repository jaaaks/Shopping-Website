import React, { Component } from "react";
import "../styles/login.css";
import Logo from "../styles/icons8-openid-500.png";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const User = {
      email,
      password,
    };
    this.props.loginUser(User);
  };
  render() {
    const { errors } = this.state;
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
              <div>
                <input
                  type="email"
                  onChange={this.onChange}
                  error={errors.email}
                  placeholder="Email"
                  id="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                />
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div>
                <input
                  type="password"
                  onChange={this.onChange}
                  error={errors.password}
                  placeholder="Password"
                  id="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
