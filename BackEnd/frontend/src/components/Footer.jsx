import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons';
import "../styles/css/footer.css";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid">
          <div className="container top">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="part1">
                  <h4>Know Us</h4>
                  <ul className="list-unstyle">
                    <li>
                      <Link to="/login">About Us</Link>
                    </li>
                    <li>
                      <Link to="/login">Careers</Link>
                    </li>
                    <li>
                      <Link to="/login">Company Cares</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="part3">
                  <h4>Help</h4>
                  <ul className="list-unstyle">
                    <li>
                      <Link to="/login">Your Account</Link>
                    </li>
                    <li>
                      <Link to="/login">Returns Centre</Link>
                    </li>
                    <li>
                      <Link to="/login">Purchase Protection</Link>
                    </li>
                    <li>
                      <Link to="/login">Help</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="part2">
                  <h4>Make Money</h4>
                  <ul className="list-unstyle">
                    <li>
                      <Link to="/login">Sell On Company</Link>
                    </li>
                    <li>
                      <Link to="/login">Become An Affiliate</Link>
                    </li>
                    <li>
                      <Link to="/login">Advertise Products</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="part2">
                  <h4>Follow Us</h4>
                  <ul className="list-unstyle">
                    <li>
                      <Link to="/login"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> Twitter</Link>
                    </li>
                    <li>
                      <Link to="/login"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> Facebook</Link>
                    </li>
                    <li>
                      <Link to="/login"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> Instagram</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="bottom">
                  &copy; Copyright 2020 - Company Name. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
