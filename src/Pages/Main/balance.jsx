import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Profile from "../../components/Cards/settings";
import ContentBalance from "../../components/Contents/Balance";

import { getUser } from "../../Publics/Actions/users";

class myBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getUser()).then(() => {
      this.setState({
        userData: this.props.user.usersList
      });
    });
  };

  render() {
    return (
      <Fragment>
        <Profile />
        <ContentBalance userData={this.state.userData} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users
  };
};

export default connect(mapStateToProps)(myBalance);
