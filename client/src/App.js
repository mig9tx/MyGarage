import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./containers/App";
import { configureStore } from "./redux/store";

const MainApp = () => (
  <Provider store={configureStore()}>
      <Router>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
      </Router>
  </Provider>
);

export default MainApp;