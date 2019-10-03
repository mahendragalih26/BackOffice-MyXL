import React, { Fragment, useState } from "react";
import {
  Table,
  Container,
  Button,
  ButtonToolbar,
  Badge,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import PackageAdd from "../Modals/addPackage.jsx";
import { connect } from "react-redux";

import { deletePackage } from "../../Publics/Actions/package";

const PackageList = props => {
  const [modalShow, setModalShow] = useState(false);
  const deleteHandler = async id => {
    await props.dispatch(deletePackage(id)).then(() => {
      window.location.reload();
    });
  };
  let { myPackage } = props;
  let { myPackageItem } = props;
  let { myCategory } = props;
  return (
    <Fragment>
      <Container style={{ marginTop: "30px" }}>
        <h2>Dashboard Package</h2>
        <div>
          <ButtonToolbar className="pull-right" style={{ margin: "10px" }}>
            <Button variant="success" onClick={() => setModalShow(true)}>
              Add New Package
            </Button>
            <PackageAdd
              myPackageItem={myPackageItem}
              myCategory={myCategory}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ButtonToolbar>
        </div>
        <Table responsive="xl" striped bordered hover>
          <thead>
            <tr>
              <th>Id Package</th>
              <th>Nama Package</th>
              <th>Valid Until</th>
              <th>Price</th>
              {/* <th>description</th> */}
              {/* <th>term Condition</th> */}
              <th>Category</th>
              <th>SubCategory</th>
              <th>Package Item</th>
              <th>Category Name</th>
              <th>Sub Name</th>
              <th>Action</th>
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
                    <td>
                      Rp.
                      <b>
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </b>
                    </td>
                    {/* <td>{item.description}</td> */}
                    {/* <td>{item.termsCondition}</td> */}
                    <td>{item.category}</td>
                    <td>{item.subcategory}</td>
                    <td>
                      <Fragment>
                        {item.packageItems[0] ? (
                          <Fragment>
                            {item.packageItems.map(id => (
                              <h5>
                                <Fragment>
                                  {console.log(item.packageItems)}
                                  {// id.filter(i => i.id.include("TEL"))
                                  id.type === "telpon" ? (
                                    <Badge
                                      variant="primary"
                                      style={{ color: "white" }}
                                    >
                                      {id.name}
                                    </Badge>
                                  ) : id.type === "sms" ? (
                                    <Badge
                                      variant="success"
                                      style={{ color: "white" }}
                                    >
                                      {id.name}
                                    </Badge>
                                  ) : (
                                    <Badge
                                      variant="warning"
                                      style={{ color: "white" }}
                                    >
                                      {id.name}
                                    </Badge>
                                  )}
                                </Fragment>
                              </h5>
                            ))}
                          </Fragment>
                        ) : null}
                      </Fragment>
                    </td>
                    <td>{item.categoryName}</td>
                    <td>{item.subcategoryName}</td>
                    <td>
                      <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={
                          <Tooltip id={`tooltip-top`}>Edit data</Tooltip>
                        }
                      >
                        <Button
                          variant="primary"
                          // onClick={() => setModalEditShow(true)}
                          style={{ color: "white" }}
                        >
                          <i className="fa fa-pencil" />
                        </Button>
                      </OverlayTrigger>
                      {/* <BalanceEdit
                        show={modalEditShow}
                        onHide={() => setModalEditShow(false)}
                      /> */}
                      &nbsp;
                      <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={
                          <Tooltip id={`tooltip-top`}>Delete Package</Tooltip>
                        }
                      >
                        <Button
                          variant="danger"
                          onClick={() => deleteHandler(item.id)}
                        >
                          <i className="fa fa-trash" />
                        </Button>
                      </OverlayTrigger>
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

export default connect()(PackageList);
