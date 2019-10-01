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

class editModalBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPackage: {
        name: "",
        email: "",
        password: ""
      },
      loadMore: []
    };
  }

  handleChange = e => {
    let newFormData = { ...this.state.formData };
    const target = e.target;
    const name = target.name;
    const value = target.value;
    newFormData[name] = value;
    this.setState(
      {
        formData: newFormData
      },
      () => {
        console.log(this.state.formData);
      }
    );
  };

  //   inputStockHandler = (event) => {
  //     const tmp = [];
  //     this.state.itemstock.map(i => {
  //         if(i.branch == event.target.id){// eslint-disable-line
  //             tmp.push({
  //                 ...i,
  //                 [event.target.name]:[event.target.value][0]
  //             })
  //         } else {
  //             tmp.push(i)
  //         }
  //         this.setState({itemstock:tmp})

  //         return null;
  //     })
  // }

  //   handleAdd = async e => {
  //     e.preventDefault();
  //     await this.props
  //       .dispatch(register(this.state.formData))
  //       .then(() => {
  //         // alert("Login Berhasil Yepiee");
  //         SweetAlert.fire({
  //           title: "Yeayy!",
  //           text: `Data has been updated`,
  //           type: "success",
  //           confirmButtonText: "OK",
  //           confirmButtonColor: "#E28935"
  //         }).then(() => {
  //           window.location.href = "/";
  //         });
  //       })
  //       .catch(err => {
  //         alert(err);
  //       });
  //   };

  render() {
    console.log("statenya = ", this.state.loadMore);
    console.log("propsnya = ", this.props);
    return (
      <Fragment>
        <Modal
          {...this.props}
          aria-labelledby="contained-modal-title-vcenter"
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Balance form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    No. Telp
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" name="number" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={2}>
                    Name User
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" name="name" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                  <Form.Label column sm={2}>
                    Balance
                  </Form.Label>
                  <Col sm={10}>
                    <InputGroup style={{ marginBottom: "20px" }}>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                      />

                      <Form.Control.Feedback type="invalid">
                        Please add new data.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={2}>
                    Name User
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" name="name" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="pull-right">
                  <Button type="submit" variant="success">
                    Submit New Package
                  </Button>
                </Form.Group>
              </Form>
            </Container>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}

export default editModalBalance;
