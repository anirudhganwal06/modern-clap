import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, Alert, Row, Col } from 'react-bootstrap';

const AccountDetails = ({ onChange, ...props }) => {
  const onInputChange = e => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">Account Details</h4>
      <Row className="p-3">
        <Col md={12}>
          <Alert variant="warning">
            <strong>Note : </strong> Using there credentials you can login your
            account.
          </Alert>
        </Col>
        <Col lg={4} xs={12}>
          <FormGroup>
            <label>Email ID </label>
            <FormControl
              type="text"
              className="dv_all_inputs"
              placeholder="Enter"
              name="email"
              value={props.email}
              onChange={onInputChange}
            />
          </FormGroup>
        </Col>
        <Col lg={4} xs={12}>
          <FormGroup>
            <label>Password </label>
            <FormControl
              type="password"
              className="dv_all_inputs"
              placeholder="Enter"
              name="password"
              value={props.password}
              onChange={onInputChange}
            />
          </FormGroup>
        </Col>
        <Col lg={4} xs={12}>
          <FormGroup>
            <label>Re-enter Password </label>
            <FormControl
              type="password"
              className="dv_all_inputs"
              placeholder="Enter"
              name="reenterPassword"
              value={props.reenterPassword}
              onChange={onInputChange}
            />
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

AccountDetails.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  reenterPassword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AccountDetails;
