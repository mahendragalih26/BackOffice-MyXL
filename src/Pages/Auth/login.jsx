import React, { Fragment, Component } from "react";
import { Form, Button, Col, Card, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
// Component
import { login } from "../../Publics/Actions/users";

class loginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: "",
        password: ""
      },
      isLoggedIn: ""
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

  handleSubmit = async e => {
    e.preventDefault();
    const data = this.state.formData;
    await this.props
      .dispatch(login(data))
      .then(res => {
        console.log(res);
        window.localStorage.setItem(
          "token",
          res.action.payload.data.data.token
        );
        this.setState({
          isLoggedIn: true
        });
      })
      .catch(() => {
        this.setState({
          showModal: true,
          errMsg: this.props.user.errMsg
        });
      });
  };

  isLoggedIn() {
    return window.localStorage.getItem("token");
  }

  render() {
    // if(localStorage.getItem("token")) return <Redirect to="../" />
    // localStorage.getItem("token").length > 0 ?
    if (localStorage.getItem("token") !== null) {
      return (
        <Redirect
          to={{
            pathname: "/main"
          }}
        />
      );
    } else {
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
              <Form onSubmit={this.handleSubmit}>
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
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(loginPage);

// export default loginPage;
