import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import Profile from "../../components/Cards/settings";
import ContentPackageItem from "../../components/Contents/PackageItem.jsx";
import { Spinner } from "react-bootstrap";
import {
  getPackageItem,
  deletePackageItem
} from "../../Publics/Actions/packageItem";

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
    // console.log("ini searchnya = ", this.state.search);
  };

  handleDelete = id => {
    console.log("aaaa = ", id);
    Swal.fire({
      title: "Anda Yakin Ingin?",
      text: " Delete Paket ini !",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete Paket!"
    }).then(result => {
      if (result.value) {
        // e.preventDefault();
        this.props.dispatch(deletePackageItem(id));
        Swal.fire("Succes!", "Delete Paket Berhasil.").then(() =>
          window.location.reload()
        );
      }
    });
  };

  componentDidMount = async () => {
    await this.props.dispatch(getPackageItem());
    await this.setState({
      myPackage: this.props.myItem.packagesItemList
    });
    // console.log("data wow = ", this.state.myPackage);
  };

  render() {
    if (this.props.isLoading) {
      return (
        <Fragment>
          <Spinner animation="grow" />
        </Fragment>
      );
    } else {
      const { search, myPackage } = this.state;

      const filteredPackages = myPackage.filter(item => {
        // console.log("my item a = ", item.name, "asd", item.type);
        return item.name.toLowerCase().includes(search.toLowerCase());
      });

      return (
        <Fragment>
          <Profile />
          <ContentPackageItem
            handleDelete={this.handleDelete}
            myItem={filteredPackages}
            handleChange={this.handleChange}
          />
        </Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.packageItem.isLoading,
    myItem: state.packageItem
  };
};

export default connect(mapStateToProps)(myMain);
