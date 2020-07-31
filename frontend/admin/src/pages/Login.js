import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

import Footer from '../components/common/Footer';
import loginBG from '../images/login-bg.jpg';

const Login = () => {
  document.title = 'Login - Modernclap';

  return (
    <div
      style={{
        background:
          'linear-gradient( rgba(0, 123, 255, 0.90), rgba(0, 123, 255) ), url(' +
          loginBG +
          ')'
      }}
    >
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <Container>
              <Row className="justify-content-center">
                <Col lg={5}>
                  <Card className="dv_cards">
                    <Card.Header>
                      <h3 className="text-center font-weight-bold my-2">
                        Seller Login
                      </h3>
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Group>
                          <input
                            className="form-control dv_login_form_input"
                            id="inputEmailAddress"
                            type="email"
                            placeholder="Username or Email address"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Control
                            className="dv_login_form_input"
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check custom>
                            <Form.Check.Input id="rememberPasswordCheck" />
                            <Form.Check.Label htmlFor="rememberPasswordCheck">
                              Remember password
                            </Form.Check.Label>
                          </Form.Check>
                        </Form.Group>
                        <Form.Group className="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <Link className="small" to="/reset-password">
                            Forgot Password?
                          </Link>
                          <Link className="btn btn-primary" href="/index">
                            Login
                          </Link>
                        </Form.Group>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
