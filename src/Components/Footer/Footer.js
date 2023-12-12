import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-menu">
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#work">work</a>
            </li>
            <li>
              <a href="#cert">certifications</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
