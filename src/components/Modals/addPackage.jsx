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

class PackageModal extends Component {
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

  handleLoadMore = () => {
    // this.state.loadMore.push("aa");
    let tmp = this.state.loadMore;
    tmp.push("aa");
    this.setState({ loadMore: tmp });
  };

  handleComponent = () => {
    return (
      <InputGroup style={{ marginBottom: "20px" }}>
        <Form.Control
          type="text"
          placeholder="Username"
          aria-describedby="inputGroupPrepend"
          required
        />
        <InputGroup.Prepend>
          <Button
            {...this.props}
            id="inputGroupPrepend"
            onClick={() => {
              this.handleLoadMore();
            }}
          >
            <i className="fa fa-plus" />
          </Button>
        </InputGroup.Prepend>
        <Form.Control.Feedback type="invalid">
          Please add new data.
        </Form.Control.Feedback>
      </InputGroup>
    );
  };

  componentDidUpdate = () => {
    this.handleComponent();
    // if (0 < this.state.loadMore.length) {
    //   console.log("did update");
    // }
  };

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
    return (
      <Fragment>
        <Modal
          {...this.props}
          aria-labelledby="contained-modal-title-vcenter"
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Package form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Nama Package
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" name="name" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={2}>
                    Category
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      name=""
                      placeholder="internet, nelpon"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                  <Form.Label column sm={2}>
                    Username
                  </Form.Label>
                  <Col sm={10}>
                    <InputGroup style={{ marginBottom: "20px" }}>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <InputGroup.Prepend>
                        <Button
                          {...this.props}
                          id="inputGroupPrepend"
                          onClick={() => {
                            this.handleLoadMore();
                          }}
                        >
                          <i className="fa fa-plus" />
                        </Button>
                      </InputGroup.Prepend>
                      <Form.Control.Feedback type="invalid">
                        Please add new data.
                      </Form.Control.Feedback>
                    </InputGroup>

                    {this.state.loadMore.map(() => this.handleComponent())}
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="pull-right">
                  <Col>
                    <Button type="submit" variant="success">
                      Submit New Package
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default PackageModal;
