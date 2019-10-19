import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Redirect } from "react-router-dom";

import store from "./Publics/store";

import TryChart from "./components/Contents/Chart.jsx";
import Login from "./Pages/Auth/login.jsx";
import Main from "./Pages/Main/dashboard.jsx";
import MainBalance from "./Pages/Main/balance.jsx";
import MainHistory from "./Pages/Main/history.jsx";
import PackageItem from "./Pages/Main/package_item.jsx";
import Category from "./Pages/Main/category.jsx";

function App() {
  return (
    <div>
      <Provider store={store}>
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
            path="/package"
            exact
            render={props => {
              return (
                <Fragment>
                  {localStorage.getItem("token") !== null ? (
                    <Main />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/"
                      }}
                    />
                  )}
                </Fragment>
              );
            }}
          />
          <Route
            path="/package-item"
            exact
            render={props => {
              return (
                <Fragment>
                  {localStorage.getItem("token") !== null ? (
                    <PackageItem />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/"
                      }}
                    />
                  )}
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
                  {localStorage.getItem("token") !== null ? (
                    <MainBalance />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/"
                      }}
                    />
                  )}
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
                  {localStorage.getItem("token") !== null ? (
                    <MainHistory />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/"
                      }}
                    />
                  )}
                </Fragment>
              );
            }}
          />
          <Route
            path="/category"
            exact
            render={props => {
              return (
                <Fragment>
                  {localStorage.getItem("token") !== null ? (
                    <Category />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/"
                      }}
                    />
                  )}
                </Fragment>
              );
            }}
          />
          <Route
            path="/try"
            exact
            render={props => {
              return (
                <Fragment>
                  {localStorage.getItem("token") !== null ? (
                    <TryChart />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/"
                      }}
                    />
                  )}
                </Fragment>
              );
            }}
          />
          {/* Route */}
        </Router>
      </Provider>
    </div>
  );
}

export default App;
