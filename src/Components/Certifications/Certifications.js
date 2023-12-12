import React, { Component } from "react";
import "./Certifications.css";
import { CertificationList } from "./CertificationList";

class Certifications extends Component {
  handleMouseHover() {}

  render() {
    return (
      <div className="certification-container" id="cert">
        <h2>CERTIFICATIONS.</h2>
        <div className="project-list">
          <ul className="project-list-container">
            {CertificationList.map((item, index) => {
              return (
                <li className="project" key={index}>
                  <p>{item.company}</p>
                  <h3>{item.title}</h3>
                  <p>{item.year}</p>
                  <div className="img-container"></div>
                </li>
              );
            })}
          </ul>
          <div className="certImg"></div>
        </div>
      </div>
    );
  }
}

export default Certifications;
