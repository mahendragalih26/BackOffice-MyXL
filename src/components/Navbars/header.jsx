import React, { Fragment } from "react";

import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown,
  Image
} from "react-bootstrap";

const myHeader = props => {
  return (
    <Fragment>
      <Navbar
        bg="light"
        variant="danger"
        style={{ paddingLeft: "35px", paddingBottom: "10px" }}
        sticky="top"
      >
        <Navbar.Brand href="/main">
          <Image
            style={{ maxHeight: "40px" }}
            src="https://d17e22l2uh4h4n.cloudfront.net/corpweb/pub-xlaxiata/2019-03/xl-logo.png"
          />
        </Navbar.Brand>
        <Nav className="mr-auto" style={{ marginLeft: "30px" }}>
          <NavDropdown
            title="Package & History"
            id="collasible-nav-dropdown"
            style={{ marginRight: "20px", fontWeight: "bold" }}
          >
            <NavDropdown.Item href="/main" style={{ fontSize: "20px" }}>
              <i className="fa fa-line-chart" />
              &nbsp; History Transaction
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/package" style={{ fontSize: "20px" }}>
              <i className="fa fa-th-large" />
              &nbsp; Package
            </NavDropdown.Item>
            <NavDropdown.Item href="/package-item" style={{ fontSize: "20px" }}>
              <i className="fa fa-th" />
              &nbsp; Package Item
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Manage Balance"
            id="collasible-nav-dropdown"
            style={{
              marginRight: "20px",
              fontWeight: "bold"
            }}
          >
            <NavDropdown.Item href="/balance" style={{ fontSize: "20px" }}>
              <i className="fa fa-money" />
              &nbsp; Add Balance
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Category"
            id="collasible-nav-dropdown"
            style={{ marginRight: "20px", fontWeight: "bold" }}
          >
            <NavDropdown.Item href="/category" style={{ fontSize: "20px" }}>
              <i className="fa fa-code-fork" />
              &nbsp;Category
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
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
      </Navbar>
    </Fragment>
  );
};

export default myHeader;
