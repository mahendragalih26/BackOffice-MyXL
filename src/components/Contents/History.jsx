import React, { Fragment, useState } from "react";
import {
  Table,
  Container,
  Dropdown,
  DropdownButton,
  Button,
  ButtonToolbar,
  Breadcrumb
} from "react-bootstrap";

// import BalanceAdd from "../Modals/addBalance.jsx";
import Charts from "../../components/Contents/Charts";

const HistoryList = props => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
      {console.log("props transaction data = ", props.transactionData)}
      <Container style={{ marginTop: "30px" }}>
        <h2>Dashboard History</h2>
        <Breadcrumb>
          <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item href="/main">History</Breadcrumb.Item>
        </Breadcrumb>
        <Charts dataTransaction={props.transactionData} />
        <div>
          <ButtonToolbar
            className="pull-right"
            style={{
              marginTop: "20px",
              marginBottom: "10px",
              paddingLeft: "10px"
            }}
          >
            <Button variant="primary" className="pull-right">
              <i className="fa fa-th-list" />
            </Button>
          </ButtonToolbar>
          <DropdownButton
            alignRight
            className="pull-right"
            title="Sort By"
            id="dropdown-menu-align-right"
            style={{ marginTop: "20px", marginBottom: "10px" }}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </div>
      </Container>
      <Container style={{ marginTop: "20px" }}>
        <Table>
          <thead striped>
            <tr>
              <th>Number Phone</th>
              <th>ID Package</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {props.transactionData.length > 0 ? (
              <Fragment>
                {props.transactionData.map(item => (
                  <tr>
                    <td>{item.number}</td>
                    <td>{item.id}</td>
                    <td>
                      Rp.
                      <b>
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </b>
                    </td>
                    <td>{item.date}</td>
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

export default HistoryList;
