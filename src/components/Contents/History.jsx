import React, { Fragment, useState } from "react";
import {
  Table,
  Container,
  Dropdown,
  DropdownButton,
  Button,
  ButtonToolbar,
  Form,
  Col,
  Row,
  InputGroup
} from "react-bootstrap";

import BalanceAdd from "../Modals/addBalance.jsx";

const HistoryList = props => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
      <Container style={{ marginTop: "30px" }}>
        <h2>Dashboard History</h2>
        {/* <ButtonToolbar className="pull-right" style={{ margin: "10px" }}>
          <Button variant="success" onClick={() => setModalShow(true)}>
            Add New Balance
          </Button>
          <BalanceAdd show={modalShow} onHide={() => setModalShow(false)} />
        </ButtonToolbar> */}

        <ButtonToolbar className="pull-right" style={{ margin: "10px" }}>
          <Button variant="primary" className="pull-right">
            <i className="fa fa-th-list" />
          </Button>
        </ButtonToolbar>
        <DropdownButton
          alignRight
          style={{ margin: "10px" }}
          className="pull-right"
          title="Dropdown right"
          id="dropdown-menu-align-right"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>

        <div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </Fragment>
  );
};

export default HistoryList;
