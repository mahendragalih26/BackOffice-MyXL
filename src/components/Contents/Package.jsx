import React, { Fragment, useState } from "react";
import {
  Table,
  Container,
  Button,
  ButtonToolbar,
  Badge
} from "react-bootstrap";
import PackageAdd from "../Modals/addPackage.jsx";

const PackageList = props => {
  const [modalShow, setModalShow] = useState(false);
  let { myPackage } = props;
  return (
    <Fragment>
      {console.log("data package = ", myPackage)}
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
              <th>Id Package</th>
              <th>Nama Package</th>
              <th>Valid Until</th>
              <th>Price</th>
              <th>description</th>
              <th>term Condition</th>
              <th>Category</th>
              <th>SubCategory</th>
              <th>Package Item</th>
              <th>Category Name</th>
              <th>Sub Name</th>
            </tr>
          </thead>
          <tbody>
            {myPackage.length > 0 ? (
              <Fragment>
                {myPackage.map(item => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.validUntil}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td>{item.termsCondition}</td>
                    <td>{item.category}</td>
                    <td>{item.subcategory}</td>
                    <td>
                      <Fragment>
                        {item.packageItems.map(id => (
                          <h4>
                            <Fragment>
                              {// id.filter(i => i.id.include("TEL"))
                              id.type === "telpon" ? (
                                <Badge variant="primary">{id.id}</Badge>
                              ) : id.type === "sms" ? (
                                <Badge variant="success">{id.id}</Badge>
                              ) : (
                                <Badge variant="warning">{id.id}</Badge>
                              )}
                            </Fragment>
                          </h4>
                        ))}
                      </Fragment>
                    </td>
                    <td>{item.categoryName}</td>
                    <td>{item.subcategoryName}</td>
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

export default PackageList;
