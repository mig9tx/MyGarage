import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { Nav } from "reactstrap";


// Private Route
import PrivateRoute from "./components/private-route/PrivateRoute";
// import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Nav from "./components/Nav/landingNav";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import Maintenance from "./pages/Maintenance";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";



// Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
  // Decode token and get user info and exp
  // const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  // store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  // const currentTime = Date.now() / 1000; // to get in milliseconds
  // if (decoded.exp < currentTime) {
    // Logout user
    // store.dispatch(logoutUser());

    // // Redirect to login
    // window.location.href = "./login";
//   }
// }

class App extends Component {
  render() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Nav />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <Route component={NoMatch} /> */}

          <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/maintenance/:id" component={Maintenance} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      </Router>
      </Provider>
  );
  }
}

export default App;
