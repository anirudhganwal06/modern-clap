import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';

const ResetPassword = () => {
  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">
        Reset Password
        <Link to="#!" className="float-right">
          edit
        </Link>
      </h4>
      <Row className="p-3">
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Current Password </label>
            <FormControl
              type="Password"
              className="dv_all_inputs dv_error_for_input"
              placeholder="Enter"
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>New Password </label>
            <FormControl
              type="Password"
              className="dv_all_inputs"
              placeholder="Enter"
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Retype New Password </label>
            <FormControl
              type="Password"
              className="dv_all_inputs"
              placeholder="Enter"
            />
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ResetPassword;
