import React, { Fragment, Component } from "react";
import {
  Modal,
  Container,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  Spinner
} from "react-bootstrap";
import { connect } from "react-redux";

import { addPackage } from "../../Publics/Actions/package";
import { getSubCategory } from "../../Publics/Actions/category";

class PackageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formPackage: {
        name: "",
        validUntil: "",
        price: "",
        description: "",
        termsCondition: "",
        packageItems: [],
        category: "",
        subcategory: ""
      },
      loadMore: [],
      subCategory: []
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

  handleArrayPush = e => {
    const tmp = this.state.formPackage.packageItems;
    this.props.myPackageItem.map(i => {
      if (i.id == e.target.value) {
        tmp.push(i.id);
        this.setState({
          formPackage: { ...this.state.formPackage, packageItems: tmp }
        });
      }
      console.log("ini dataku", this.state.formPackage);

      return null;
    });
  };

  //For DropBox
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
          as="select"
          name="packageItems"
          onClick={e => {
            this.handleArrayPush(e);
          }}
        >
          <option selected disabled>
            Pilih Package Item
          </option>
          {this.props.myPackageItem.length > 0 ? (
            <Fragment>
              {this.props.myPackageItem.map(item => (
                <option value={item.id}>{item.name}</option>
              ))}
            </Fragment>
          ) : null}
        </Form.Control>

        <Form.Control.Feedback type="invalid">
          Please add new data.
        </Form.Control.Feedback>
      </InputGroup>
    );
  };

  componentDidUpdate = () => {
    this.handleComponent();
  };

  // handleAdd = async e => {
  //   e.preventDefault();
  //   await this.props.dispatch(addPackage(this.state.formPackage));
  // };

  handleSubCategory = async id => {
    // console.log("subb categ = ", id);
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.dispatch(addPackage(this.state.formPackage)).then(() => {
      window.location.reload();
    });
  };

  render() {
    // console.log("statenya = ", this.state.loadMore);
    // console.log("state pitem = ", this.props.myPackageItem);
    // console.log("subCategory = ", this.props.mySubCategory.subCategoryList);
    let mySubCategory = this.props.mySubCategory.subCategoryList;
    console.log("awuwuw = ", this.props.isLoading);

    return this.props.isLoading ? (
      <Fragment>
        <Spinner animation="grow" />
      </Fragment>
    ) : (
      <Fragment>
        <Modal
          {...this.props}
          aria-labelledby="contained-modal-title-vcenter"
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Package form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={3}>
                    Nama Package
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      name="name"
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={3}>
                    Valid Until
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      name="validUntil"
                      placeholder="per day"
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={3}>
                    Price
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      name="price"
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={3}>
                    Description
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        name="description"
                        rows="3"
                        onChange={e => {
                          this.handleChange(e);
                        }}
                      />
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
                        onChange={e => {
                          this.handleChange(e);
                        }}
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
                      <Form.Control
                        as="select"
                        name="packageItems"
                        onChange={e => {
                          this.handleArrayPush(e);
                        }}
                        // onChange={() => {
                        //   console.log("masok");
                        // }}
                      >
                        <option selected disabled>
                          Chose Package Item
                        </option>
                        {this.props.myPackageItem.length > 0 ? (
                          <Fragment>
                            {this.props.myPackageItem.map((item, index) => (
                              <Fragment>
                                {/* {console.log("aa ", item.id)} */}
                                <option
                                  key={index}
                                  id={item.id}
                                  value={item.id}

                                  // onChange={() => {
                                  //   console.log("masok");
                                  // }}
                                >
                                  {item.name}
                                </option>
                              </Fragment>
                            ))}
                          </Fragment>
                        ) : null}
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Please add data in package Item page.
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
                      <Form.Control
                        as="select"
                        name="category"
                        onChange={async e => {
                          this.handleChange(e);
                          await this.props.dispatch(
                            getSubCategory(e.target.value)
                          );

                          this.setState({
                            subCategory: this.props.mySubCategory
                              .subCategoryList
                          });
                          console.log(
                            "state sub category = ",
                            this.state.subCategory
                          );
                        }}
                      >
                        {this.props.myCategory.length > 0 ? (
                          <Fragment>
                            <option selected disabled>
                              Pilih category
                            </option>
                            {this.props.myCategory.map(item => (
                              <option
                                value={item.id}
                                onClick={() => {
                                  // awowo
                                  this.handleSubCategory(item.id);
                                }}
                              >
                                {item.name}
                              </option>
                            ))}
                          </Fragment>
                        ) : null}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={3}>
                    Sub Category
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Group>
                      <Form.Control
                        as="select"
                        name="subcategory"
                        onChange={e => {
                          this.handleChange(e);
                        }}
                      >
                        {mySubCategory.length > 0 ? (
                          <Fragment>
                            <option selected disabled>
                              Pilih Sub - category
                            </option>
                            {mySubCategory.map(item => (
                              <option
                                value={item.id}
                                onClick={() => {
                                  this.handleSubCategory(item.id);
                                }}
                              >
                                {item.name}
                              </option>
                            ))}
                          </Fragment>
                        ) : null}
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

const mapStateToProps = state => {
  // console.log(state);
  return {
    isLoading: state.myPackage.isLoading,
    myPackage: state.myPackage,
    mySubCategory: state.myCategory
  };
};

export default connect(mapStateToProps)(PackageModal);
