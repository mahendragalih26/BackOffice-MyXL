import React, { Component, Fragment } from "react";

import Profile from "../../components/Cards/settings";
import ContentPackage from "../../components/Contents/Package";

class myMain extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Profile />
        <ContentPackage />
      </Fragment>
    );
  }
}

export default myMain;
