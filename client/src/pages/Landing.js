import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Jumbotron from "../components/Jumbotron";


class Landing extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="row text-center">
            <div className="col-md-12 center-align">
                <h1>
                <b>Build</b> a login/auth app with the{" "}
                <span>My Garage</span> stack from
                scratch
              </h1>
                <h3>
                Create a (minimal) full-stack app with user authentication via
                passport and JWTs
              </h3>
              <br />
                <div className="col-md-8 mx-auto">
                  <div className="col-md-4">
                    {/* <Link
                      to="/register"
                      style={{
                        width: "140px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px"
                      }}
                      className="btn btn-large btn-primary"
                    >
                      Register
                    </Link> */}
                  </div>
                  <div className="col-md-4">
                  {/* <Link
                    to="/login"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px"
                    }}
                    className="btn btn-large btn-light"
                  >
                    Log In
                  </Link> */}
                </div>
                </div>
              </div>
            </div>
        </div>
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
    );
  }
}

export default Landing;
