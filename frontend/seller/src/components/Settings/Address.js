import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Address = ({ active, setActive }) => {
  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">
        Address
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
            onClick={() => setActive('address')}
          >
            edit
          </Link>
        )}
      </h4>
      {active && (
        <Row className="p-3">
          <Col xs={12}>
            <FormGroup>
              <label>Address </label>
              <FormControl
                type="text"
                className="dv_all_inputs"
                placeholder="M-2, Bualeeba plaza, near google plaza center, goregaon est, Mumbai - 400063"
                disabled
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>State </label>
              <FormControl
                type="text"
                className="dv_all_inputs"
                placeholder="State"
                defaultValue="Maharashtra"
                disabled
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>City / Area </label>
              <FormControl
                type="text"
                className="dv_all_inputs"
                placeholder="City Area"
                defaultValue="Mumbai"
                disabled
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Pincode </label>
              <FormControl
                disabled
                type="text"
                className="dv_all_inputs"
                defaultValue={81765}
              />
            </FormGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

Address.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
};

export default Address;
