import React, { Fragment, useState } from "react";
import {
  Table,
  Container,
  Button,
  ButtonToolbar,
  Form,
  FormControl
} from "react-bootstrap";

import PackageItemAdd from "../Modals/addPackageItem.jsx";
import BalanceEdit from "../Modals/editPackageItem.jsx";

const PackageList = props => {
  const [modalShow, setModalShow] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalVal, setVal] = useState();
  const [modalVal1, setVal1] = useState();
  const [modalVal2, setVal2] = useState();
  const [modalVal3, setVal3] = useState();
  let myItem = props.myItem;

  const handler = (id, type, name, value) => {
    setVal(id);
    setVal1(type);
    setVal2(name);
    setVal3(value);
    // console.log("ini item = ", modalVal);
    setModalEdit(true);
  };
  return (
    <Fragment>
      {console.log("ini props = ", myItem)}
      <Container style={{ marginTop: "30px" }}>
        <h2>Dashboard Package Item</h2>
        <Form inline>
          <FormControl
            type="text"
            name="search"
            placeholder="Search"
            className="mr-sm-2"
            onChange={e => props.handleChange(e)}
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <div>
          <ButtonToolbar className="pull-right" style={{ margin: "10px" }}>
            <Button variant="success" onClick={() => setModalShow(true)}>
              Add New Package
            </Button>
            <PackageItemAdd
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ButtonToolbar>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id Package Item</th>
              <th>Item Type</th>
              <th>Item Name</th>
              <th>Value item (/mb)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myItem.length > 0 ? (
              <Fragment>
                {myItem.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.type}</td>
                    <td>{item.name}</td>
                    <td>{item.value}</td>
                    <td>
                      {/* <Button
                        variant="primary"
                        onClick={() =>
                          handler(item.id, item.type, item.name, item.value)
                        }
                        style={{ color: "white" }}
                      >
                        <i className="fa fa-pencil" />
                        &nbsp; Edit
                      </Button> */}
                      &nbsp;
                      <Button
                        variant="danger"
                        onClick={() => props.handleDelete()}
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

        <BalanceEdit
          data={modalVal}
          data1={modalVal1}
          data2={modalVal2}
          data3={modalVal3}
          show={modalEdit}
          onHide={() => setModalEdit(false)}
        />
      </Container>
    </Fragment>
  );
};

export default PackageList;
