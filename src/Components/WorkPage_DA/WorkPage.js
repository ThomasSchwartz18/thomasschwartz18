import React, { Component } from "react";
import "./WorkPage.css";
import { projects } from "./WorkList";
import {
  FiChevronRight,
  FiChevronLeft,
  FiArrowRightCircle,
} from "react-icons/fi";

class WorkPage_DA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProjectIndex: 0,
    };
  }

  goToPrevSlide = () => {
    this.setState((prevState) => {
      let currentProjectIndex = prevState.currentProjectIndex - 1;
      if (currentProjectIndex === -1) {
        currentProjectIndex = projects.length - 1;
      }
      return { currentProjectIndex };
    });
  };

  goToNextSlide = () => {
    this.setState((prevState) => {
      let currentProjectIndex = prevState.currentProjectIndex + 1;
      if (currentProjectIndex >= projects.length) {
        currentProjectIndex = 0;
      }
      return { currentProjectIndex };
    });
  };

  render() {
    const { currentProjectIndex } = this.state;

    return (
      <div className="photo-gallery" id="work">
        <h2>DATA ANALYST CASE STUDIES.</h2>
        <div className="slider">
          <button className="photo-btn1" onClick={this.goToNextSlide}>
            <i aria-hidden="true">
              <FiChevronLeft className="arrow" />
            </i>
          </button>
          <div className="on-slide">
            <img
              className="photo-gallery-img"
              src={projects[currentProjectIndex].image}
            />
            <div className="project-description">
              <h3 className="underline">
                {projects[currentProjectIndex].name}
              </h3>
              <p className="underline">{projects[currentProjectIndex].tools}</p>
              <p className="description">
                {projects[currentProjectIndex].description}
              </p>
              <a href={projects[currentProjectIndex].link} target="_blank">
                View live site
                <span>
                  <FiArrowRightCircle />
                </span>
              </a>
            </div>
          </div>
          <button className="photo-btn2" onClick={this.goToNextSlide}>
            <i aria-hidden="true">
              <FiChevronRight className="arrow" />
            </i>
          </button>
          <div className="mobile-btns">
            <button className="photo-btn3" onClick={this.goToNextSlide}>
              <i aria-hidden="true">
                <FiChevronLeft className="arrow2" /> <p>Previous</p>
              </i>
            </button>
            <button className="photo-btn4" onClick={this.goToNextSlide}>
              <i aria-hidden="true">
                <p>Next</p>
                <FiChevronRight className="arrow2" />
              </i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkPage_DA;
