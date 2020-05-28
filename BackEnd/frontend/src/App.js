import React, { Component } from "react";
import NavBar from "./components/navbar";
import Login from "./components/Login";
import SignUp from "./components/signup";
import Landing from "./components/Landing";
import {
  useLocation,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import MyAccount from "./components/MyAccount";


const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <NavBar />
      )}
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Switch>
        <PrivateRoute exact path="/my account" component={MyAccount} />
      </Switch>
    </div>
  );
};

export default App;
