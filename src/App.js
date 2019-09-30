import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Pages/Auth/login.jsx";
import Main from "./Pages/Main/dashboard.jsx";

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
        {/* Route */}
      </Router>
    </div>
  );
}

export default App;
