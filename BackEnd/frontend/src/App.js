import React, { Component } from 'react';
import Login from './components/Login';
import SignUp from './components/signup';
import NavBar from './components/navbar';

class App extends Component {
  state = { 
    showNavBar: true,
    showLogin: false,
    showSignUp:false
   };
  forLogin= () => {
    this.setState({showNavBar: false});
    this.setState({showLogin: true});
    this.setState({showSignUp: false});
  };
  forSignUp= () =>{
    this.setState({showNavBar: false});
    this.setState({showSignUp: true});
    this.setState({showLogin: false});
  }
  render() { 
    const {showNavBar, showLogin, showSignUp} = this.state;
    return (
      <React.Fragment >
        {showNavBar && <NavBar onLogin={this.forLogin} onSignUp={this.forSignUp}/>}
        {showLogin && <Login onSignUp={this.forSignUp}/>}
        {showSignUp && <SignUp onLogin={this.forLogin}/>}
      </React.Fragment>
    );
  }
}
 
export default App;