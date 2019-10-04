import React, { Fragment, useState } from "react";
import {
  Table,
  Container,
  Button,
  ButtonToolbar,
  Form,
  Col,
  Row,
  InputGroup,
  Badge
} from "react-bootstrap";

import BalanceAdd from "../Modals/addBalance.jsx";
import BalanceEdit from "../Modals/editBalance";

const BalanceList = props => {
  const [modalShow, setModalShow] = useState(false);
  const [modalEditShow, setModalEditShow] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  return (
    <Fragment>
      {console.log("ini props = ", props.categoryData)}
      <Container style={{ marginTop: "30px" }}>
        <h2>Dashboard Category</h2>
        <div>
          <Form>
            <Form.Group as={Row} controlId="">
              <Col sm={3} style={{ paddingTop: "12px" }}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search local data here.."
                    aria-describedby="inputGroupPrepend"
                    className="pull-right"
                    required
                  />
                </InputGroup>
              </Col>
              <Col sm={6} style={{ paddingTop: "12px" }}>
                {/* <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    className="pull-right"
                  />
                </InputGroup> */}
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
              <th>Category ID</th>
              <th>Category Name</th>
              <th>Sub Category</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {props.categoryData.length > 0 ? (
              <Fragment>
                {props.categoryData.map(item => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <Fragment>
                        {item.subcategories.map(id => (
                          <h5>
                            <Badge variant="success" style={{ color: "white" }}>
                              {id.name}
                            </Badge>
                          </h5>
                        ))}
                      </Fragment>
                    </td>
                    {/* <td>
                      <Button
                        variant="primary"
                        // onClick={() => setModalEditShow(true)}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-pencil" />
                        &nbsp; Edit
                      </Button>
                      &nbsp;
                      <Button
                        variant="danger"
                      >
                        <i className="fa fa-trash" />
                        &nbsp; Delete
                      </Button>
                    </td> */}
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
