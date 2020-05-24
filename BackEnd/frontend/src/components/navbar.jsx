import React, { Component } from 'react';
import '../styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faHome,faSignInAlt,faUserPlus } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
          <div className="container-fluid">
            <nav className="navbar navbar-dark navbar-expand-lg">
              <a
                href="#"
                id="navbarDropdown"
                className="nav-link p-0"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  className="bi bi-list"
                  width="3em"
                  height="4em"
                  viewBox="0 0 16 16"
                  fill="#A4A4BF"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <h3 className="head">CATEGORIES</h3>
                <a className="dropdown-item" href="#">
                  Mobiles, Computers
                </a>
                <a className="dropdown-item" href="#">
                  TV, Appliances & Electronics
                </a>
                <a href="#" className="dropdown-item">
                  Men's Fashion
                </a>
                <a href="#" className="dropdown-item">
                  Women's Fashion
                </a>
                <a href="#" className="dropdown-item">
                  Home, Kitchen, Pets
                </a>
                <a href="#" className="dropdown-item">
                  Beauty, Health, Grocery
                </a>
                <a href="#" className="dropdown-item">
                  Sports, Fitness, Bags, Luggage
                </a>
                <a href="#" className="dropdown-item">
                  Toys, Baby Products, Kids' Fashion
                </a>
                <a href="#" className="dropdown-item">
                  Car, Motorbike & Industrial
                </a>
                <a href="#" className="dropdown-item">
                  Books & Audible
                </a>
                <a href="#" className="dropdown-item">
                  Movies, Music & Video Games
                </a>
                <div className="dropdown-divider"></div>
                <h3 className="head">Help & Settings</h3>
                <a className="dropdown-item" href="#">
                  Your Account
                </a>
                <a className="dropdown-item" href="#">
                  Customer Service
                </a>
                <a className="dropdown-item" onClick={this.props.onLogin} href="#">
                  Sign In
                </a>
              </div>
              <a href="#" className="navbar-brand px-5">
                <img src="../styles/logo.gif" alt="COMPANY LOGO"></img>
              </a>
              <form className="form-inline my-2 my-lg-0 w-100 justify-content-center">
                <input
                  type="search"
                  placeholder="Search For Products....."
                  aria-label="Search"
                  className="form-control-lg w-50 mr-sm-2"
                />
                <button
                  className="btn btn-lg btn-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav mt-2 mt-lg-0">
                  <li className="nav-item pl-0 pr-0 active">
                    <a href="#" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a href="#" className="nav-link pl-0 pr-3">
                      <FontAwesomeIcon icon={faHome} />
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a href="#" className="nav-link pl-3 pr-1" onClick={this.props.onLogin}>
                      Login
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a href="#" className="nav-link pl-0 pr-3" onClick={this.props.onLogin}>
                      <FontAwesomeIcon icon={faSignInAlt} />
                    </a>
                  </li>
                  <li className="nav-item " onClick={this.props.onSignUp}>
                    <a href="#" className="nav-link pl-3">
                      Register
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a href="#" className="nav-link pl-0 pr-3" onClick={this.props.onSignUp}>
                      <FontAwesomeIcon icon={faUserPlus} />
                    </a>
                  </li>
                  <li className="nav-item pl-3">
                    <a href="#" className="nav-link">
                      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          );
    }
}
 
export default NavBar;