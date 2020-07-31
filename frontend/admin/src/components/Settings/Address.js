import React from 'react';

import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';

const Address = () => {
  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">
        Address
        <div className="float-right dv_setting_save_btn_wrapper">
          <button type="button" className="btn btn-sm text-dark">
            Cancel
          </button>
          <button type="button" className="btn btn-sm btn-primary">
            Save
          </button>
        </div>
      </h4>
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
    </div>
  );
};

export default Address;
