import React, { Fragment, useState } from "react";
import {
  Table,
  Container,
  Button,
  ButtonToolbar,
  Form,
  Col,
  Row,
  InputGroup
} from "react-bootstrap";

import BalanceAdd from "../Modals/addBalance.jsx";

const BalanceList = props => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
      <Container style={{ marginTop: "30px" }}>
        <h2>Dashboard Balance</h2>
        <div>
          <Form>
            <Form.Group as={Row} controlId="">
              <Col sm={4} style={{ paddingTop: "12px" }}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    className="pull-right"
                    required
                  />
                </InputGroup>
              </Col>
              <Col sm={5} style={{ paddingTop: "12px" }}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    className="pull-right"
                  />
                </InputGroup>
              </Col>
              <Col sm={3}>
                <ButtonToolbar
                  className="pull-right"
                  style={{ margin: "10px" }}
                >
                  <Button variant="success" onClick={() => setModalShow(true)}>
                    Add New Balance
                  </Button>
                  <BalanceAdd
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </ButtonToolbar>
              </Col>
            </Form.Group>
          </Form>
        </div>
        <Table responsive style={{ width: "70%" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => setModalShow(true)}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-pencil" />
                  &nbsp; Edit
                </Button>
                &nbsp;
                <Button variant="danger" onClick={() => setModalShow(true)}>
                  <i className="fa fa-trash" />
                  &nbsp; Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => setModalShow(true)}
                  style={{ color: "white" }}
                >
                  <i className="fa fa-pencil" />
                  &nbsp; Edit
                </Button>
                &nbsp;
                <Button variant="danger" onClick={() => setModalShow(true)}>
                  <i className="fa fa-trash" />
                  &nbsp; Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
};

export default BalanceList;
