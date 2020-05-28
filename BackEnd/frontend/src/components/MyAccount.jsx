import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
class MyAccount extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <h1> Hey, {user.name.split(" ")[0]} this is your account. </h1>
        <br />
        <br />
        <h3> Please, log out you are no longer needed here </h3>
        <button onClick={this.onLogoutClick}> Ok </button>
      </div>
    );
  }
}
MyAccount.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(MyAccount);
