import React, { Fragment, Component } from "react";
import { Modal, Container, Form, Button, Row, Col } from "react-bootstrap";
import swal from "sweetalert2";
import { connect } from "react-redux";

import { editPackageItem } from "../../Publics/Actions/packageItem";

class PackageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPackage: {
        type: "",
        name: "",
        value: ""
      },
      id: "",
      loadMore: [],
      dataItem: {}
    };
  }

  handleChange = e => {
    let newFormData = { ...this.state.formPackage };
    const target = e.target;
    const name = target.name;
    const value = target.value;
    newFormData[name] = value;
    this.setState(
      {
        id: this.props.data,
        formPackage: newFormData
      },
      () => {
        console.log(this.state.formPackage);
      }
    );
  };

  handleUpdate = async e => {
    e.preventDefault();
    console.log("handle update package item = ", this.state.formPackage);
    // await this.props.dispatch(editPackageItem(id, formPackage));
  };

  componentDidMount = () => {
    this.setState({
      id: this.props.data,
      formPackage: {
        type: this.props.data1,
        name: this.props.data2,
        value: this.props.data3
      }
    });
    console.log("statenya1 a = ", this.props);
  };

  // handleAdd = async e => {
  //   e.preventDefault();
  //   // console.log("handle add package item = ", this.state.formPackage);
  //   await this.props
  //     .dispatch(addPackageItem(this.state.formPackage))
  //     .then(() => {
  //       // alert("Login Berhasil Yepiee");
  //       swal
  //         .fire({
  //           title: "Yeayy!",
  //           text: `Data Tertambahkan`,
  //           type: "success",
  //           confirmButtonText: "OK",
  //           confirmButtonColor: "#E28935"
  //         })
  //         .then(() => {
  //           window.location.reload();
  //         });
  //     })
  //     .catch(err => {
  //       alert(err);
  //     });
  // };

  // componentDidMount = () => {
  //   this.setState({
  //     dataItem: this.props.data
  //   });
  // };

  render() {
    // this.setState({
    //   dataItem: this.props.data
    // });
    // console.log("statenya = ", this.state.dataItem);
    return (
      <Fragment>
        <Modal
          {...this.props}
          aria-labelledby="contained-modal-title-vcenter"
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Package Item
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              {/* {this.props.data.length > 0 ? (
                <Fragment></Fragment>
              {this.props.data.map(item => ( */}
              <Form onSubmit={this.handleUpdate}>
                <Form.Control
                  type="hidden"
                  name="id"
                  value={this.props.data}
                ></Form.Control>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={3}>
                    Item Type
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      as="select"
                      name="type"
                      onClick={e => {
                        this.handleChange(e);
                      }}
                    >
                      <option disabled selected>
                        === Select Type ===
                      </option>
                      <option value="telpon">Telpon</option>
                      <option value="internet">Internet</option>
                      <option value="sms">SMS</option>
                    </Form.Control>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={3}>
                    Item Name
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="{this.state.dataItem}"
                      onChange={e => {
                        this.handleChange(e);
                      }}
                      defaultValue={this.props.data2}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={3}>
                    Value Item
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      name="value"
                      placeholder="*per mb"
                      onChange={e => {
                        this.handleChange(e);
                      }}
                      defaultValue={this.props.data3}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="pull-right">
                  <Col sm={12}>
                    <Button type="submit" variant="success">
                      Edit Package Item
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
              {/* ))}
              </Fragment>
              ) : null} */}
            </Container>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    isLoading: state.myPackage.isLoading,
    myPackage: state.myPackage,
    mySubCategory: state.myCategory
  };
};

export default connect(mapStateToProps)(PackageModal);

// export default PackageModal;
