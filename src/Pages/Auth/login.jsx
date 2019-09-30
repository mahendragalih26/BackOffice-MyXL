import React, { Fragment, Component } from "react";
import { Form, Button, Col, Card, Navbar } from "react-bootstrap";

// Component

class loginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        email: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    let newFormData = { ...this.state.formData };
    const target = e.target;
    const name = target.name;
    const value = target.value;
    newFormData[name] = value;
    this.setState(
      {
        formData: newFormData
      },
      () => {
        console.log(this.state.formData);
      }
    );
  };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   await this.props
  //     .dispatch(register(this.state.formData))
  //     .then(() => {
  //       // alert("Login Berhasil Yepiee");
  //       SweetAlert.fire({
  //         title: "Yeayy!",
  //         text: `Data has been updated`,
  //         type: "success",
  //         confirmButtonText: "OK",
  //         confirmButtonColor: "#E28935"
  //       }).then(() => {
  //         window.location.href = "/";
  //       });
  //     })
  //     .catch(err => {
  //       alert(err);
  //     });
  // };

  render() {
    return (
      <Fragment>
        <div
          style={{
            marginTop: "13%"
          }}
        >
          <Card
            style={{
              margin: "auto",
              width: "40%",
              height: "60%"
            }}
            bg="light"
            border="primary"
            variant="primary"
          >
            {/* onSubmit={this.handleSubmit} */}
            <Form>
              <Card.Header
                style={{
                  textAlign: "center"
                }}
              >
                <h2>
                  Backoffice MyXL &nbsp;
                  <i className="fa fa-user" style={{ fontSize: "30px" }}></i>
                </h2>
              </Card.Header>
              <Card.Body>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your Email..."
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password..."
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                </Form.Row>
              </Card.Body>
              <Card.Footer className="text-right">
                <Button variant="primary" type="submit">
                  Masuk
                </Button>
              </Card.Footer>
            </Form>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default loginPage;
