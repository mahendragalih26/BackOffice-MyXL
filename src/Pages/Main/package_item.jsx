import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Profile from "../../components/Cards/settings";
import ContentPackageItem from "../../components/Contents/PackageItem.jsx";

import { getPackageItem } from "../../Publics/Actions/packageItem";

class myMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPackage: [],
      search: ""
    };
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      search: value
      // search: target
    });
    console.log("ini searchnya = ", this.state.search);
  };

  componentDidMount = async () => {
    await this.props.dispatch(getPackageItem()).then(() => {
      this.setState({
        myPackage: this.props.myItem.packagesList
      });
    });
  };
  render() {
    const { search, myPackage } = this.state;
    const filteredPackages = myPackage.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <Fragment>
        <Profile />
        <ContentPackageItem
          myItem={filteredPackages}
          handleChange={this.handleChange}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    myItem: state.packageItem
  };
};

export default connect(mapStateToProps)(myMain);
