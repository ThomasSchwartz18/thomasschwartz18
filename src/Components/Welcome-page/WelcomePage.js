import React from "react";
import "./WelcomePage.css";
import { Component } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

class WelcomePage extends Component {
  handleClick = () => {
    document.getElementById("site-link").style.transform = "rotate(90deg)";
  };

  render() {
    return (
      <div className="welcome-page-container">
        <h1>
          HELLO, <br></br> I'M A WEB DEVELOPER.
        </h1>
        <a href="#contact" onClick={this.handleClick}>
          Let's get in touch
          <span id="site-link">
            <FiArrowRightCircle />
          </span>
        </a>
      </div>
    );
  }
}

export default WelcomePage;
