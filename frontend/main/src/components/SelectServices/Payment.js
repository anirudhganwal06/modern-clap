import React from 'react';

import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormCheck from 'react-bootstrap/FormCheck';

const Payment = () => {
  return (
    <>
      <div className="dv_payment_selection">
        <Row style={{ width: '100%', margin: 0 }}>
          <Col as={FormCheck} type="radio" custom xs={12}>
            <FormCheck.Input
              type="radio"
              id="cash"
              name="payment-mode"
              defaultChecked
            />
            <FormCheck.Label htmlFor="cash">
              Paying through cash after service
            </FormCheck.Label>
          </Col>
          <div className="dv_divider_in_booking_request" />
          <Col as={FormCheck} type="radio" custom xs={12}>
            <FormCheck.Input type="radio" id="card" name="payment-mode" />
            <FormCheck.Label htmlFor="card">
              Paying through card after service
            </FormCheck.Label>
          </Col>
          <div className="dv_divider_in_booking_request" />
          {/* <Col as= {FormCheck} xs={12} custom>
            <FormCheck.Input id="cardonline" name="cardonline">
            <FormCheck.Label for="cardonline">Add Cards and Pay through Online  </FormCheck.Label>
          </Col> */}
        </Row>
      </div>
      <div className="dv_view_cart_visible">
        <ul>
          <li>
            Total : 5 services <span>AED 120</span>
          </li>
          <li>
            VAT 5% : <span>AED 6</span>
          </li>
          <li>
            Discount : <span>AED 12</span>
          </li>
          <li>
            Grand Total : <span>AED 114</span>
          </li>
        </ul>
      </div>
      <div className="dv_payment_selection">
        <Row style={{ width: '100%', margin: 0 }}>
          <Col as={FormCheck} custom xs={12}>
            <FormCheck.Input id="iamsure" defaultChecked />
            <FormCheck.Label htmlFor="iamsure">
              I am surely want to book this service and with this i am accepting
              our{' '}
              <Link
                style={{ color: '#282828', fontWeight: 800 }}
                to="/terms-and-conditions"
              >
                Terms &amp; Condition.
              </Link>
            </FormCheck.Label>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Payment;
