import React, { Component } from "react";
import { ScrollContainer } from "react-scroll-motion";

class LandingPage extends Component {
  render() {
    return (
      <ScrollContainer>
        <ScrollPage page={0}></ScrollPage>
      </ScrollContainer>
    );
  }
}
