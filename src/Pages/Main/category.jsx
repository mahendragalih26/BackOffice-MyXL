import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Profile from "../../components/Cards/settings";
import ContentCategory from "../../components/Contents/Category";

import { getCategory } from "../../Publics/Actions/category";

class myBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: []
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getCategory()).then(() => {
      this.setState({
        categoryData: this.props.category.categoryList
      });
    });
  };

  render() {
    return (
      <Fragment>
        <Profile />
        <ContentCategory categoryData={this.state.categoryData} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.myCategory
  };
};

export default connect(mapStateToProps)(myBalance);
