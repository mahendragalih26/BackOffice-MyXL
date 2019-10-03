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
import { connect } from "react-redux";

import { addUserBalance } from "../../Publics/Actions/balance";

class editModalBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // formPackage: {
      //   number: "",
      //   email: "",
      //   password: ""
      // },
      number: "",
      amount: "",
      loadMore: []
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: [event.target.value] }, () => {
      console.log(this.state.number);
      console.log(this.state.amount);
    });
  };

  componentDidMount = () => {
    this.setState({
      number: this.props.number
    });
  };

  handleAdd = async e => {
    e.preventDefault();
    await this.props.dispatch(
      addUserBalance(this.state.number, this.state.amount)
    );
  };

  render() {
    console.log("statenya = ", this.state.number);
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
              <Form onSubmit={this.handleAdd}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    User Number
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      name="number"
                      defaultValue={this.props.number}
                      disabled
                    ></Form.Control>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="">
                  <Form.Label column sm={2}>
                    Add Balance
                  </Form.Label>
                  <Col sm={10}>
                    <InputGroup style={{ marginBottom: "20px" }}>
                      <Form.Control
                        type="text"
                        aria-describedby="inputGroupPrepend"
                        name="amount"
                        onChange={e => {
                          this.handleChange(e);
                        }}
                        required
                      />

                      <Form.Control.Feedback type="invalid">
                        Please add new data.
                      </Form.Control.Feedback>
                    </InputGroup>
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

const mapStateToProps = state => {
  return {
    myBalance: state.addBalance
  };
};

export default connect(mapStateToProps)(editModalBalance);
