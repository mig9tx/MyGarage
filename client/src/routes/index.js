import React, { Component } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";

import TopNav from "../containers/Sidebar";
import Sidebar from "../containers/Sidebar";

import garage from "./garage";
import secondMenu from "./second-menu";
import thirdSingle from "./third-single";

import { connect } from "react-redux";

class MainApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { match, containerClassnames } = this.props;
        return (
            <div id="app-container" className={containerClassnames}>
              <TopNav history={this.props.history} />
              <Sidebar />
              <main>
                <div className="container-fluid">
                  <Switch>
                    <Route path={`${match.url}/garage`} component={garage} />
                    <Route path={`${match.url}/second-menu`} component={secondMenu} />
                    <Route path={`${match.url}/third-single`} component={thirdSingle} />
                    <Redirect to="/erro" />
                  </Switch>
                </div>
              </main>
            </div>
        );
    }
}
const mapStateToProps = ({ menu }) => {
    const { containerClassnames } = menu;
    return { containerClassnames };
};

export default withRouter(
    connect(
        mapStateToProps,
        {}
    )(MainApp)
);