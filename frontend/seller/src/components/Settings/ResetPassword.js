import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';

const ResetPassword = ({ active, setActive }) => {
  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">
        Reset Password
        {active ? (
          <div className="float-right dv_setting_save_btn_wrapper">
            <button
              type="button"
              className="btn btn-sm text-dark"
              onClick={() => setActive('')}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-sm btn-primary">
              Save
            </button>
          </div>
        ) : (
          <Link
            to="#!"
            className="float-right"
            onClick={() => setActive('resetPassword')}
          >
            edit
          </Link>
        )}
      </h4>
      {active && (
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
      )}
    </div>
  );
};

ResetPassword.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
};

export default ResetPassword;
