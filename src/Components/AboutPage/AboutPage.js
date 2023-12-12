import React, { Component } from "react";
import "./AboutPage.css";
import { Experience, Hobbies } from "./AboutLists";
import { Animator, ScrollContainer, ScrollPage } from "react-scroll-motion";
import {
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

class AboutPage extends Component {
  render() {
    return (
      <ScrollContainer>
        <ScrollPage page={0}>
          <div className="about-container" id="about">
            <h2>ABOUT.</h2>
            <p className="about-p">
              My name is <a href="#contact">Thomas Schwartz</a> and I am a
              junior web developer with a passion for creating dynamic,
              user-friendly websites.
            </p>
            <h3 className="experience-title">Experience</h3>
            <ul className="experience">
              {Experience.map((item, index) => {
                return (
                  <li key={index} className="li">
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
            <h3 className="experience-title">Hobbies</h3>
            <ul className="hobbies">
              {Hobbies.map((item, index) => {
                return (
                  <li key={index} className="hobbies-li">
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </ScrollPage>
      </ScrollContainer>
    );
  }
}

export default AboutPage;
