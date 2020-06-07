import React, { Component } from "react";
import "../styles/css/register.css";
import RegIcon from "../styles/register_page/registration-icon.png";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    password: "",
    errors: {},
  };

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/my account");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const { name, email, number, password } = this.state;

    const User = {
      name,
      email,
      number,
      password,
    };
    this.props.registerUser(User, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="my-component"></div>
        <div className="reg-form">
          <div className="icon">
            <img src={RegIcon} alt=""></img>
          </div>
          <div className="title">
            <h2>Create Account</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="text"
                  onChange={this.onChange}
                  error={errors.name}
                  placeholder="Full Name"
                  id="name"
                  className={classnames("", {
                    invalid: errors.name,
                  })}
                />
                <span className="error-name">{errors.name}</span>
              </div>
              <div>
                <input
                  type="email"
                  onChange={this.onChange}
                  error={errors.email}
                  placeholder="Email Address"
                  id="email"
                  className={classnames("", {
                    invalid: errors.email,
                  })}
                />
                <span className="error-email">{errors.email}</span>
              </div>
              <div>
                <input
                  type="text"
                  onChange={this.onChange}
                  error={errors.number}
                  placeholder="Phone Number"
                  id="number"
                  className={classnames("", {
                    invalid: errors.number,
                  })}
                />
                <span className="error-number">{errors.number}</span>
              </div>
              <div>
                <input
                  type="password"
                  onChange={this.onChange}
                  error={errors.number}
                  id="password"
                  className={classnames("", {
                    invalid: errors.password,
                  })}
                  placeholder="Password"
                />
                <span className="error-password">{errors.password}</span>
              </div>
              <input type="submit" className="button" value="Submit" />
            </form>
            <Link to="/login" className="link-login">
              {" "}
              Already a member? Login Here
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(SignUp));
