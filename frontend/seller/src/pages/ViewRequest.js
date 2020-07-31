import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  FormGroup,
  FormControl,
  Alert,
  InputGroup,
  FormCheck
} from 'react-bootstrap';
import { ChevronLeft } from 'react-feather';

import SwitchBusiness from '../components/common/SwitchBusiness';
import StarRating from '../components/Reviews/StarRating';
import askConfirmation from '../utils/askConfirmation';

import userDefaultImg from '../images/user-default.png';
import { ReactComponent as GreenTickSVG } from '../svgs/tick-green.svg';
import ConfirmationModal from '../components/common/ConfirmationModal';

const ViewRequest = () => {
  document.title = 'View Request - Modernclap';

  const [toolsRating, setToolsRating] = useState(0);
  const [workRating, setWorkRating] = useState(0);
  const [behaviourRating, setBehaviourRating] = useState(0);
  const [overallRating, setOverallRating] = useState(0);
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const handleMakePayment = () => {
    askConfirmation(setConfirmationOpen, () => {
      console.log('YES was clicked!');
    });
  };

  return (
    <Container fluid>
      <SwitchBusiness
        title="Goodhand Transaction LLC"
        options={[
          'Change',
          'Orville Real Estate',
          'Lightspeed General Trading',
          'Alahsa Stone',
          'TOG'
        ]}
      />
      <h1 className="mt-4 dv_page_heading">View Request</h1>
      <Card className="mb-4">
        <Card.Header className="text-center">
          {/* <Button variant="danger" className="dv_accep_reject_btn">Reject </Button> */}
          {/* <Button variant="primary" className="dv_accep_reject_btn">Make </Button> */}
          <Button
            variant="primary"
            className="dv_accep_reject_btn"
            onClick={handleMakePayment}
          >
            Add OTP For Review
          </Button>
        </Card.Header>
        <Card.Body className="p-0">
          <div className="dv_customer_details">
            <Row>
              <Col md={3} className="p-0">
                <h4
                  className="view_request_title"
                  style={{ paddingLeft: '25px' }}
                >
                  Customer
                </h4>
                <Col md={12} className="pr-0">
                  <div className="dv_provider_customer_details p-0">
                    <ul
                      className="dv_booking_details"
                      style={{
                        borderBottom: 'none',
                        borderTop: 'none',
                        borderLeft: 'none'
                      }}
                    >
                      <li>
                        <img
                          src={userDefaultImg}
                          style={{
                            opacity: '0.4',
                            float: 'left',
                            width: '23px',
                            margin: '0 10px 0 0',
                            borderRadius: '50%'
                          }}
                          alt=""
                        />
                        <strong>Sanjay sakpal </strong>
                      </li>
                      <li>
                        Phone no <strong>971 56 876 8765</strong>
                      </li>
                      <li>
                        email ID <strong>demo@gmail.com</strong>
                      </li>
                      <li>
                        PO Box <strong>81748</strong>
                      </li>
                      <li>
                        city <strong>dubai</strong>
                      </li>
                      <li>
                        state <strong>dubai</strong>
                      </li>
                      <li>
                        country <strong>United Arab Emirates </strong>
                      </li>
                      <li>
                        address{' '}
                        <strong>
                          <span>Home </span>... M-3, Buhaleeba plaza, al
                          muraqabat road, Al rigga DUbai UAE PO Box 81748
                        </strong>{' '}
                        <Link style={{ display: 'block' }} to="#!">
                          View in Map
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Col>
              <Col md={3} className="p-0 dv_mobile_left_12">
                <h4 className="view_request_title">Provider</h4>
                <Col md={12} className="p-0">
                  <div className="dv_provider_customer_details p-0">
                    <ul
                      className="dv_booking_details"
                      style={{
                        borderBottom: 'none',
                        borderTop: 'none',
                        borderLeft: 'none'
                      }}
                    >
                      <li>
                        <img
                          src={userDefaultImg}
                          style={{
                            opacity: '0.4',
                            float: 'left',
                            width: '23px',
                            margin: '0 10px 0 0',
                            borderRadius: '50%'
                          }}
                          alt=""
                        />
                        <strong>Goodhand Technical Services </strong>
                      </li>
                      <li>
                        Phone no <strong>971 56 876 1235</strong>
                      </li>
                      <li>
                        email ID <strong>Goodhand@gmail.com</strong>
                      </li>
                      <li>
                        PO Box <strong>81748</strong>
                      </li>
                      <li>
                        city <strong>dubai</strong>
                      </li>
                      <li>
                        state <strong>dubai</strong>
                      </li>
                      <li>
                        country <strong>United Arab Emirates </strong>
                      </li>
                      <li>
                        address{' '}
                        <strong>
                          12 Millennium Dr, Isle of Dogs, London E14 3GJ, UAE
                        </strong>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Col>
              <Col md={3} className="p-0 dv_mobile_left_12">
                <h4 className="view_request_title">booking details</h4>
                <Col md={12} className="p-0">
                  <div className="dv_provider_customer_details p-0">
                    <ul
                      className="dv_booking_details"
                      style={{
                        borderBottom: 'none',
                        borderTop: 'none',
                        borderLeft: 'none'
                      }}
                    >
                      <li>
                        Ref ID: <strong>MD 12345</strong>
                      </li>
                      {/* if they will select time based type */}
                      {/* <li>Total Time : <strong>01:10 Min </strong></li> */}
                      <li>
                        Promo code : <strong>-</strong>
                      </li>
                      <li>
                        Booking Status :{' '}
                        <strong style={{ color: 'green' }}>Completed</strong>
                      </li>
                      <li>
                        Payment Status :{' '}
                        <strong style={{ color: '#ff9800' }}>Pending</strong>
                      </li>
                      <li>
                        Payment Mode : <strong>Cash </strong>
                      </li>
                      <li>
                        Total Amount : <strong>AED 50 </strong>
                      </li>
                      <li>
                        Distance : <strong>3.2 KM </strong>
                      </li>
                      <li>
                        Penalty : <strong>AED 15 </strong>, 10 min Late Reach
                      </li>
                    </ul>
                  </div>
                </Col>
              </Col>
              <Col md={3} className="p-0 dv_mobile_left_12">
                <h4 className="view_request_title">Services</h4>
                <Col md={12} className="p-0">
                  <div className="dv_provider_customer_details p-0">
                    <ul
                      className="dv_booking_details"
                      style={{
                        borderBottom: 'none',
                        borderTop: 'none',
                        borderLeft: 'none'
                      }}
                    >
                      <li>
                        Total <strong>4 </strong>
                      </li>
                      <li>
                        1) <strong>Manicure Pedicure </strong>
                      </li>
                      <li>
                        2) <strong>Hair Keratin </strong>
                      </li>
                      <li>
                        3) <strong>Waxing </strong>
                      </li>
                      <li>
                        4) <strong>Spa </strong>
                      </li>
                      <li>
                        TIming : <strong>12/12/2020 , 1 PM</strong>
                      </li>
                      <li>
                        Total Amount : <strong>AED 50 </strong>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
      <Row>
        <Col md={6} xs={12} style={{ margin: '0 auto' }}>
          {/* <span
            className="dv_section_heading"
            style={{
              margin: '0 0 15px 0',
              background: 'rgb(63, 199, 63, 0.3)',
              color: '#1b901b'
            }}
          >
            <GreenTickSVG />
            Payment Done
            <p
              style={{
                fontSize: '12px',
                textTransform: 'initial',
                fontWeight: 400,
                padding: '0 0 0 32px',
                margin: 0
              }}
            >
              We have received your payment against <strong>MD123443 </strong>{' '}
              invoice on <strong>12/12/2020</strong>. Please shaare your
              feedback to improve our quality service for you.
            </p>
          </span> */}
          <Card className="mb-4">
            <Card.Header>
              <ChevronLeft size={24} /> Add Review - MD12345
            </Card.Header>
            <Card.Body>
              <span
                className="dv_section_heading"
                style={{
                  margin: '0 0 15px 0',
                  background: 'rgb(63, 199, 63, 0.3)',
                  color: '#1b901b'
                }}
              >
                <GreenTickSVG />
                OTP Added Successfully.
                <p
                  style={{
                    fontSize: '12px',
                    textTransform: 'initial',
                    fontWeight: 400,
                    padding: '0 0 0 32px',
                    margin: 0
                  }}
                >
                  Please give us your valuale review to make our service more
                  better for customer.
                </p>
              </span>
              <Row>
                <Col md={12}>
                  <Alert variant="danger">
                    Enter correct OTP to write the review.
                  </Alert>
                </Col>
                <Col md={12}>
                  <InputGroup className="mb-3">
                    <label>Add OTP for Review </label>
                    <FormControl
                      type="tel"
                      className="dv_all_inputs"
                      placeholder="****"
                    />
                    <InputGroup.Append>
                      <Button
                        className="height-44"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <label>Staff Late reach minutes </label>
                    <FormControl as="select" className="dv_all_inputs">
                      <option>Before Service time </option>
                      <option>Exact on Service Time </option>
                      <option>5 Min Late </option>
                      <option>10 Min Late </option>
                      <option>15 Min Late </option>
                      <option>25 Min Late </option>
                      <option>30 Min Late </option>
                      <option>More than 30 min </option>
                    </FormControl>
                  </FormGroup>
                  <FormGroup>
                    <label>Tools </label>
                    <StarRating value={toolsRating} onChange={setToolsRating} />
                  </FormGroup>
                  <FormGroup>
                    <label>Work </label>
                    <StarRating value={workRating} onChange={setWorkRating} />
                  </FormGroup>
                  <FormGroup>
                    <label>Behaviour </label>
                    <StarRating
                      value={behaviourRating}
                      onChange={setBehaviourRating}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Overall Rating </label>
                    <StarRating
                      value={overallRating}
                      onChange={setOverallRating}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Review </label>
                    <FormControl
                      type="text"
                      className="dv_all_inputs"
                      style={{ height: '100px', width: '100%' }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Any Suggestion </label>
                    <FormControl
                      type="text"
                      className="dv_all_inputs"
                      style={{ height: '100px', width: '100%' }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button style={{ padding: '10px 0' }} block>
                      Submit
                    </Button>
                  </FormGroup>
                  <FormGroup>
                    <FormCheck custom id="cash">
                      <FormCheck.Input />
                      <FormCheck.Label>Paying through cash</FormCheck.Label>
                    </FormCheck>
                  </FormGroup>
                  <FormGroup>
                    <FormCheck custom id="card">
                      <FormCheck.Input />
                      <FormCheck.Label>Paying through card</FormCheck.Label>
                    </FormCheck>
                  </FormGroup>
                  <FormGroup>
                    <Button style={{ padding: '10px 0' }} block>
                      Pay Amount
                    </Button>
                  </FormGroup>
                  <FormGroup>
                    <label>Transaction No </label>
                    <FormControl
                      type="text"
                      className="dv_all_inputs"
                      placeholder="Enter"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button style={{ padding: '10px 0' }} block>
                      Complete Your Transaction
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ConfirmationModal
        isOpen={confirmationOpen}
        close={() => setConfirmationOpen(false)}
      />
    </Container>
  );
};

export default ViewRequest;
