import React, { Component } from "react";
import "../styles/register.css";
import axios from 'axios';
import RegIcon from "../styles/registration-icon.png";
import { Link } from "react-router-dom";
class SignUp extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    password: "",
  };

  handleSubmit= e =>{
  e.preventDefault();

  const { name, email, number, password } = this.state;

  const User = {
    name,
    email,
    number,
    password
  };
  axios
    .post('http://localhost:5000/api/users/register',User)
    .then(() => console.log('User Created'))
    .catch(err => {
      console.error(err);
    });
};

  render() {
    return (
      <div>
        <div className="my-component"></div>
        <div className="reg-form">
          <div className="icon">
            <img src={RegIcon}></img>
          </div>
          <div className="title">
            <h2>Create Account</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                onChange={(e) =>
                  this.setState({
                    name: e.target.value,
                  })
                }
                placeholder="Full Name"
                className="name"
                required
              />
              <input
                type="email"
                onChange={(e) =>
                  this.setState({
                    email: e.target.value,
                  })
                }
                placeholder="Email Address"
                className="mail"
                required
              />
              <input
                type="text"
                onChange={(e) =>
                  this.setState({
                    number: e.target.value,
                  })
                }
                placeholder="Phone Number"
                className="number"
                required
              />
              <input
                type="password"
                onChange={(e) =>
                  this.setState({
                    password: e.target.value,
                  })
                }
                placeholder="Password"
                className="password"
                required
              />
              <input type="submit" className="button" value="Submit" />
            </form>
            <Link to="/login" className="link-login" >
              {" "}
              Already a member? Login Here
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
