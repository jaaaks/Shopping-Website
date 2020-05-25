import React, { Component } from 'react';
import NavBar from './components/navbar';
import Login from './components/Login';
import SignUp from './components/signup';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  render() { 
    return (
      <Router>
      <div >
        <NavBar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </div>
      </Router>
    );
  }
}
 
export default App;