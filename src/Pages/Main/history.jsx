import React, { Component, Fragment } from "react";

import Profile from "../../components/Cards/settings";
import ContentHistory from "../../components/Contents/History";

class myHistory extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Profile />
        <ContentHistory />
      </Fragment>
    );
  }
}

export default myHistory;
