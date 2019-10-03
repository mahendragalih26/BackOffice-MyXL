import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Profile from "../../components/Cards/settings";
import ContentHistory from "../../components/Contents/History";

import { getTransaction } from "../../Publics/Actions/transaction";

class myHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionData: [],
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
    await this.props.dispatch(getTransaction()).then(() => {
      this.setState({
        transactionData: this.props.transaction.transactionList
      });
    });
  };
  render() {
    const { search, transactionData } = this.state;
    const filteredPackages = transactionData.filter(item =>
      item.number.toLowerCase().includes(search.toLowerCase())
    );
    console.log("my search", this.state.search);
    return (
      <Fragment>
        <Profile handleChange={this.handleChange} />
        <ContentHistory transactionData={filteredPackages} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    transaction: state.myTransaction
  };
};

export default connect(mapStateToProps)(myHistory);
