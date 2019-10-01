import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Profile from "../../components/Cards/settings";
import ContentPackage from "../../components/Contents/Package";

import { getPackage } from "../../Publics/Actions/package";

class myPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPackage: [],
      search: ""
    };
  }

  // handleChange = e => {
  //   const value = e.target.value;
  //   this.setState({
  //     search: value
  //     // search: target
  //   });
  //   console.log("ini searchnya = ", this.state.search);
  // };

  componentDidMount = async () => {
    await this.props.dispatch(getPackage()).then(() => {
      this.setState({
        myPackage: this.props.myPackage.packagesList
      });
    });
  };
  render() {
    return (
      <Fragment>
        <Profile />
        <ContentPackage myPackage={this.state.myPackage} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    myPackage: state.myPackage
  };
};

export default connect(mapStateToProps)(myPackage);
