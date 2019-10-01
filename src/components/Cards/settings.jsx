import React, { Fragment, Component } from "react";
import {
  Card,
  Button,
  Image,
  Accordion,
  Container,
  Navbar,
  Form,
  Nav
} from "react-bootstrap";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import NavbarTop from "../Navbars/header";
import "react-sliding-pane/dist/react-sliding-pane.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class mySettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false,
      isPaneOpenLeft: false,
      search: ""
    };
  }

  render() {
    return (
      <Fragment>
        <Navbar bg="primary" variant="light">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <Button
              variant="outline-light  "
              size="sm"
              onClick={() => this.setState({ isPaneOpen: true })}
            >
              Settings &nbsp;
              <i className="fa fa-gears"></i>
            </Button>
          </Form>
        </Navbar>

        <NavbarTop />
        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={this.state.isPaneOpen}
          title="Settings"
          subtitle="Hi Admin..."
          width="300px"
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            this.setState({ isPaneOpen: false });
          }}
          style={{
            height: "100%",
            right: "0",
            position: "absolute"
          }}
        >
          <Container>
            <div style={{ margin: "10px" }}>
              <Image
                style={{
                  width: "225px",
                  height: "225px",
                  marginBottom: "20px"
                }}
                src="https://picsum.photos/id/100/180/300"
                className="pull-right"
                roundedCircle
              />
            </div>
            <div></div>
            <Card>
              <Accordion>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <i
                    className="fa fa-file-pdf-o"
                    style={{ fontSize: "25px" }}
                  />
                  &nbsp; Basic Information
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Your Number</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Display Namm</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Email Addres</Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <i
                    className="fa fa-file-word-o"
                    style={{ fontSize: "25px" }}
                  />
                  &nbsp;Transfer Information!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>Your Number</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>Display Namm</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>Email Addres</Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <i
                    className="fa fa-file-archive-o"
                    style={{ fontSize: "25px" }}
                  />
                  &nbsp;Transfer Information!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>Your Number</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>Display Namm</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>Email Addres</Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <i
                    className="fa fa-file-pdf-o"
                    style={{ fontSize: "25px" }}
                  />
                  &nbsp;Transfer Information!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>Your Number</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>Display Namm</Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>Email Addres</Card.Body>
                </Accordion.Collapse>
              </Accordion>
            </Card>
          </Container>
        </SlidingPane>
      </Fragment>
    );
  }
}

export default mySettings;
