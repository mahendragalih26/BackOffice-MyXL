import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Pages/Auth/login.jsx";
import Main from "./Pages/Main/dashboard.jsx";
import MainBalance from "./Pages/Main/balance.jsx";
import MainHistory from "./Pages/Main/history.jsx";

function App() {
  return (
    <div>
      <Router>
        {/* Route */}
        <Route
          path="/"
          exact
          render={props => {
            return (
              <Fragment>
                <Login />
              </Fragment>
            );
          }}
        />
        <Route
          path="/main"
          exact
          render={props => {
            return (
              <Fragment>
                <Main />
              </Fragment>
            );
          }}
        />
        <Route
          path="/balance"
          exact
          render={props => {
            return (
              <Fragment>
                <MainBalance />
              </Fragment>
            );
          }}
        />
        <Route
          path="/history"
          exact
          render={props => {
            return (
              <Fragment>
                <MainHistory />
              </Fragment>
            );
          }}
        />
        {/* Route */}
      </Router>
    </div>
  );
}

export default App;
