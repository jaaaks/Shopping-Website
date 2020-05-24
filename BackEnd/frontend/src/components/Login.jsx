import React, { Component } from 'react';
import '../styles/login.css';
import Logo from '../styles/icons8-openid-500.png';
class Login extends Component {
    state = {  }
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
              <form method="POST">
                <input type="text" placeholder="Email" className="name"/>
                <input type="password" placeholder="Password" />

                <label className="container">
                  {" "}
                  Remember Me
                  <input type="checkbox" className="cb" />
                  <span className="checkmark"></span>
                </label>
                <input type="submit" className="button1" value="Submit" />
              </form>
              <a href="#" className="link-login" onClick={this.props.onSignUp}>Not a member? Register Here</a>
              </div>
            </div>
          </div>
        );
    }
}
 
export default Login;