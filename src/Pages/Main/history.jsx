import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Profile from "../../components/Cards/settings";
import ContentHistory from "../../components/Contents/History";

import { getTransaction } from "../../Publics/Actions/transaction";

class myHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionData: []
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getTransaction()).then(() => {
      this.setState({
        transactionData: this.props.transaction.transactionList
      });
    });
  };
  render() {
    return (
      <Fragment>
        <Profile />
        <ContentHistory transactionData={this.state.transactionData} />
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
