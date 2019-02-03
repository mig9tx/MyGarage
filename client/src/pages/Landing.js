import React, { Component, Fragment } from "react";
import landingPageMenu from "../components/layout/SectionMenu";
import SectionHeroHome from "../components/layout/SectionHeroHome";
import SectionServices from "../components/layout/SectionServices";


// import { Link } from "react-router-dom";
// import Jumbotron from "../components/Jumbotron";


class Landing extends Component {
  render() {
    return (
      <Fragment>
      <landingPageMenu />
      <SectionHeroHome />
      <SectionServices />
      </Fragment>
    );
  }
}

export default Landing;
