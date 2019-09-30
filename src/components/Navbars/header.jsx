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

const myHeader = () => {
  return (
    <Fragment>
      <Navbar
        bg="light"
        variant="danger"
        style={{ paddingLeft: "35px", paddingBottom: "10px" }}
      >
        <Navbar.Brand href="#home">
          <Image
            style={{ maxHeight: "40px" }}
            src="https://d17e22l2uh4h4n.cloudfront.net/corpweb/pub-xlaxiata/2019-03/xl-logo.png"
          />
        </Navbar.Brand>
        <Nav className="mr-auto" style={{ marginLeft: "30px" }}>
          <NavDropdown
            title="pilihan 1"
            id="collasible-nav-dropdown"
            style={{ marginRight: "20px" }}
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="pilihan 2"
            id="collasible-nav-dropdown"
            style={{ marginRight: "20px" }}
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#features" style={{ marginRight: "20px" }}>
            Features
          </Nav.Link>
          <Nav.Link href="#pricing" style={{ marginRight: "20px" }}>
            Pricing
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    </Fragment>
  );
};

export default myHeader;
