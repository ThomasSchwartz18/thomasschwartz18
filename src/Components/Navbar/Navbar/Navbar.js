import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  // create function to handleClick in mobile menu icon
  handleClick = () => {
    // set the state of state to the opposite value when clicked
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems" id="home">
        <h1 className="navbar-logo">TS</h1>
        {/* mobile hamburger menu icon */}
        <div className="menu-icon" onClick={this.handleClick}>
          {/* if state = false then 'fas fa-bars' will be the className */}
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {/* Go to the MenuItems array and for each item run this function */}
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className="hover-underline-animation" href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
