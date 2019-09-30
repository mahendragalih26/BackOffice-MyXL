import React, { Fragment, useState } from "react";
import { Table, Container, Button, ButtonToolbar } from "react-bootstrap";
import PackageAdd from "../Modals/addPackage.jsx";

const PackageList = props => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
      <Container style={{ marginTop: "30px" }}>
        <h2>Dashboard Package</h2>
        <div>
          <ButtonToolbar className="pull-right" style={{ margin: "10px" }}>
            <Button variant="success" onClick={() => setModalShow(true)}>
              Add New Package
            </Button>
            <PackageAdd show={modalShow} onHide={() => setModalShow(false)} />
          </ButtonToolbar>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Package</th>
              <th>Valid Until</th>
              <th>Price</th>
              <th>description</th>
              <th>Package</th>
              <th>Category</th>
              <th>Sub-Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
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

export default PackageList;
