import React, { Fragment } from "react";
import { Navbar } from "react-bootstrap";

const myFooter = () => {
  return (
    <Fragment>
      <Navbar
        expand="lg"
        variant="primary"
        style={{ backgroundColor: "#73c6f0", color: "white" }}
        fixed="bottom"
      >
        <Navbar.Collapse className="justify-content-end">
          <span>&copy; 2019 Cloning myXL</span>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default myFooter;
