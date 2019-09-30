import React, { Component, Fragment } from "react";

import Profile from "../../components/Cards/settings";
import Content from "../../components/Contents/Package";

class myMain extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Profile />
        <Content />
      </Fragment>
    );
  }
}

export default myMain;
