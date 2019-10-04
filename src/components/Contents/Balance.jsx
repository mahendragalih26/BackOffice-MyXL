import React, { Fragment, useState } from "react";
import {
  Table,
  Container,
  Button,
  ButtonToolbar,
  Form,
  Row
} from "react-bootstrap";

import BalanceAdd from "../Modals/addBalance.jsx";
import BalanceEdit from "../Modals/editBalance";

const BalanceList = ({ userData }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalEditShow, setModalEditShow] = useState(false);
  const [numberShow, setNumber] = useState();
  // const [modalDeleteShow, setModalDeleteShow] = useState(false);
  return (
    <Fragment>
      {console.log("ini props = ", { userData })}
      <Container style={{ marginTop: "30px" }}>
        <h2>Dashboard Balance</h2>
        <div>
          <Form>
            <Form.Group as={Row} controlId="">
              <ButtonToolbar className="pull-right" style={{ margin: "10px" }}>
                <Button variant="success" onClick={() => setModalShow(true)}>
                  Add New Balance
                </Button>
                <BalanceAdd
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </ButtonToolbar>
              {/* </Col> */}
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
                  <tr key={item._id}>
                    <td>{item.number}</td>
                    <td>{item.name}</td>
                    <td>
                      Rp.
                      <b>
                        {item.balance
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </b>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.expirationDate}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => {
                          setNumber(item.number);
                          setModalEditShow(true);
                        }}
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-plus" />
                        &nbsp; Add Balance
                      </Button>
                    </td>
                  </tr>
                ))}
              </Fragment>
            ) : null}
          </tbody>
        </Table>
        <BalanceEdit
          number={numberShow}
          show={modalEditShow}
          onHide={() => setModalEditShow(false)}
        />
      </Container>
    </Fragment>
  );
};

export default BalanceList;
