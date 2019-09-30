import React, { Component, Fragment } from "react";

import Profile from "../../components/Cards/settings";
import ContentBalance from "../../components/Contents/Balance";

class myBalance extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Profile />
        <ContentBalance />
      </Fragment>
    );
  }
}

export default myBalance;
