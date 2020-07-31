import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import Footer from '../components/common/Footer';

const RecoverPassword = () => {
  document.title = 'Reset Password - Modernclap';

  return (
    <div className="bg-primary">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <Container>
            <Row className="justify-content-center">
              <Col lg={5}>
                <Card className="shadow-lg border-0 rounded-lg mt-5">
                  <Card.Header>
                    <h3 className="text-center font-weight-light my-4">
                      Password Recovery
                    </h3>
                  </Card.Header>
                  <Card.Body>
                    <div className="small mb-3 text-muted">
                      Enter your email address and we will send you a link to
                      reset your password.
                    </div>
                    <Form>
                      <Form.Group>
                        <Form.Label
                          className="small mb-1"
                          htmlFor="inputEmailAddress"
                        >
                          Email
                        </Form.Label>
                        <Form.Control
                          className="py-4"
                          id="inputEmailAddress"
                          type="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email address"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group className="d-flex align-items-center justify-content-between mt-4 mb-0">
                        <Link className="small" to="/login">
                          Return to login
                        </Link>
                        <Link className="btn btn-primary" to="/reset-password">
                          Reset Password
                        </Link>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RecoverPassword;
