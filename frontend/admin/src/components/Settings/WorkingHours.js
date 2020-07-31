import React from 'react';

import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';

import { ReactComponent as TickSVG } from '../../svgs/tick.svg';

const WorkingHours = () => {
  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">
        Working Hours
        <a href="#!" className="float-right">
          edit
        </a>
      </h4>
      <Row className="p-3">
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Business Category </label>
            <FormControl
              type="text"
              className="dv_all_inputs"
              defaultValue="Cleaning"
              disabled
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Shop Name </label>
            <FormControl
              type="text"
              className="dv_all_inputs"
              defaultValue="Cleaning"
              disabled
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Contact Person </label>
            <FormControl
              type="text"
              className="dv_all_inputs"
              defaultValue="Shankar Gupta"
              disabled
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={4}>
          <FormGroup>
            <TickSVG
              style={{
                width: '15px',
                float: 'left',
                margin: '3px 10px 0 0'
              }}
            />
            <label>Contact Number </label>
            <FormControl
              type="text"
              className="dv_all_inputs"
              defaultValue={9222266992}
              disabled
            />
          </FormGroup>
        </Col>
        <Col xs={12} lg={4}>
          <FormGroup>
            <label>Location </label>
            <FormControl
              type="text"
              className="dv_all_inputs"
              defaultValue="Dubai"
              disabled
            />
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export default WorkingHours;
