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
    tmp.push("dummyvar");
    this.setState({ loadMore: tmp });
  };

  deleteLoadMore = () => {
    // this.state.loadMore.push("aa");
    let tmp = this.state.loadMore;
    tmp.pop();
    this.setState({ loadMore: tmp });
  };

  handleComponent = () => {
    return (
      <InputGroup style={{ marginBottom: "20px" }}>
        <Form.Control
          type="text"
          placeholder="new Package.."
          aria-describedby="inputGroupPrepend"
          required
        />
        <InputGroup.Prepend></InputGroup.Prepend>
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
                  <Form.Label column sm={3}>
                    Nama Package
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control type="text" name="name" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={3}>
                    Valid Until
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      name="valid"
                      placeholder="per menit"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={3}>
                    Price
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control type="text" name="price" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={3}>
                    Description
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Group>
                      <Form.Control as="textarea" name="description" rows="3" />
                    </Form.Group>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={3}>
                    Term Condition
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        name="termsCondition"
                        rows="3"
                      />
                    </Form.Group>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                  <Form.Label column sm={3}>
                    Package Item
                  </Form.Label>
                  <Col sm={7}>
                    <InputGroup style={{ marginBottom: "20px" }}>
                      {/* <Form.Control
                        type="text"
                        name="package"
                        placeholder="Kuota Internet / Pulsa"
                        aria-describedby="inputGroupPrepend"
                        required
                      /> */}

                      <Form.Control as="select" name="package">
                        <option selected disabled>
                          Pilih Package Item
                        </option>
                        <option>aaa</option>
                        <option>aaa</option>
                      </Form.Control>

                      <Form.Control.Feedback type="invalid">
                        Please add new data.
                      </Form.Control.Feedback>
                    </InputGroup>

                    {this.state.loadMore.map(() => this.handleComponent())}
                  </Col>
                  <Col sm={2}>
                    <Button
                      {...this.props}
                      id="inputGroupPrepend"
                      onClick={() => {
                        this.handleLoadMore();
                      }}
                    >
                      <i className="fa fa-plus" />
                    </Button>
                    &nbsp;
                    {this.state.loadMore.length > 0 ? (
                      <Button
                        variant="danger"
                        onClick={() => {
                          this.deleteLoadMore();
                        }}
                      >
                        <i className="fa fa-minus" />
                      </Button>
                    ) : null}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={3}>
                    Category
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Group>
                      <Form.Control as="select" name="category">
                        <option selected disabled>
                          Pilih category
                        </option>
                        <option>aaa</option>
                        <option>aaa</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={3}>
                    Sub-Category
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Group>
                      <Form.Control as="select" name="subcategory">
                        <option selected disabled>
                          Pilih sub category
                        </option>
                        <option>aaa</option>
                        <option>aaa</option>
                      </Form.Control>
                    </Form.Group>
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

export default PackageModal;
