import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Profile from "../../components/Cards/settings";
import ContentPackage from "../../components/Contents/Package";

import { getPackage } from "../../Publics/Actions/package";
import { getPackageItem } from "../../Publics/Actions/packageItem";
import { getCategory } from "../../Publics/Actions/category";

class myPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPackage: [],
      myPackageItem: [],
      myCategory: [],
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
    await this.props.dispatch(getCategory());
    await this.props.dispatch(getPackage());
    await this.props.dispatch(getPackageItem()).then(() => {
      this.setState({
        myPackage: this.props.myPackage.packagesList,
        myPackageItem: this.props.myPackageItem.packagesItemList,
        myCategory: this.props.myCategory.categoryList
      });
    });
  };
  render() {
    return (
      <Fragment style={{ backgroundColor: "red" }}>
        <Profile />
        <ContentPackage
          myPackage={this.state.myPackage}
          myPackageItem={this.state.myPackageItem}
          myCategory={this.state.myCategory}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    myPackage: state.myPackage,
    myPackageItem: state.packageItem,
    myCategory: state.myCategory
  };
};

export default connect(mapStateToProps)(myPackage);
