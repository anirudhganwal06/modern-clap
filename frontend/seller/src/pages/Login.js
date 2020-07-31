import React, { useRef } from 'react';
import { gql, useMutation } from '@apollo/client';

import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

import Footer from '../components/common/Footer';
import loginBG from '../images/login-bg.jpg';

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    loginProvider(email: $email, password: $password) {
      ownerName
    }
  }
`;

const Login = () => {
  document.title = 'Login - Modernclap';

  const loginForm = useRef(null);
  const [loginProvider, { called, loading, data }] = useMutation(LOGIN);

  const onLogin = async e => {
    try {
      e.preventDefault();
      const loginData = loginForm.current.elements;
      await loginProvider({
        variables: {
          email: loginData.email.value,
          password: loginData.password.value
        }
      });
    } catch(err) {
      console.log(err);
    }
  };

  const history = useHistory();
  if (called && data) {
    history.push('/');
  }

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
                      <Form id="loginForm" ref={loginForm}>
                        <Form.Group>
                          <input
                            className="form-control dv_login_form_input"
                            name="email"
                            id="inputEmailAddress"
                            type="email"
                            placeholder="Email address"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Control
                            className="dv_login_form_input"
                            name="password"
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
                          <Button
                            className="btn btn-primary"
                            form="loginForm"
                            onClick={onLogin}
                          >
                            {loading ? 'Logging in...' : 'Login'}
                          </Button>
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
