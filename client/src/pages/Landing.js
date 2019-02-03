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
      <div>
        
        {/* container section */}
        <div className="container">
          <div className="row">
            <div className="col-sm">
              One of three columns
            </div>
            <div className="col-sm">
              One of three columns
            </div>
            <div className="col-sm">
              One of three columns
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    );
  }
}

export default Landing;
