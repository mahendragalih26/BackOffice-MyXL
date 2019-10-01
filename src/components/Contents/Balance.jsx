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
import BalanceEdit from "../Modals/editBalance";

const BalanceList = ({ userData }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalEditShow, setModalEditShow] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  return (
    <Fragment>
      {console.log("ini props = ", { userData })}
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
        <Table responsive>
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Balance</th>
              <th>Email</th>
              <th>Expired Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 ? (
              <Fragment>
                {userData.map(item => (
                  <tr>
                    <td>{item.number}</td>
                    <td>{item.name}</td>
                    <td>
                      {item.balance
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.expirationDate}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => setModalEditShow(true)}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-pencil" />
                        &nbsp; Edit
                      </Button>
                      <BalanceEdit
                        show={modalEditShow}
                        onHide={() => setModalEditShow(false)}
                      />
                      &nbsp;
                      <Button
                        variant="danger"
                        onClick={() => setModalDeleteShow(true)}
                      >
                        <i className="fa fa-trash" />
                        &nbsp; Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </Fragment>
            ) : null}
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
};

export default BalanceList;
