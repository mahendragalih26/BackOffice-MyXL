import React, { Fragment, Component } from "react";
import {
  Modal,
  Container,
  Form,
  Button,
  Row,
  Col,
  InputGroup
} from "react-bootstrap";
import swal from "sweetalert2";
import { connect } from "react-redux";

import { addPackageItem } from "../../Publics/Actions/packageItem";

class PackageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPackage: {
        type: "",
        name: "",
        value: ""
      },
      loadMore: []
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
        formPackage: newFormData
      },
      () => {
        console.log(this.state.formPackage);
      }
    );
  };

  handleAdd = async e => {
    e.preventDefault();
    // console.log("handle add package item = ", this.state.formPackage);
    await this.props
      .dispatch(addPackageItem(this.state.formPackage))
      .then(() => {
        // alert("Login Berhasil Yepiee");
        swal
          .fire({
            title: "Yeayy!",
            text: `Data Tertambahkan`,
            type: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#E28935"
          })
          .then(() => {
            window.location.reload();
          });
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    console.log("statenya = ", this.props.data);
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
              <Form onSubmit={this.handleAdd}>
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
                      placeholder="Ex. (youtube, instagram, whatsapp)"
                      onChange={e => {
                        this.handleChange(e);
                      }}
                      // defaultValue={this.props.data.name}
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
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="pull-right">
                  <Col sm={12}>
                    <Button type="submit" variant="success">
                      Submit New Package
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
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
