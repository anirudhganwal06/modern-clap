import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Row, Col, FormControl, FormGroup } from 'react-bootstrap';

import { ReactComponent as TickSVG } from '../../svgs/tick.svg';

const ShopDetails = ({ active, setActive }) => {
  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">
        Shop Details
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
            onClick={() => setActive('shopDetails')}
          >
            edit
          </Link>
        )}
      </h4>
      {active && (
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
      )}
    </div>
  );
};

ShopDetails.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
};

export default ShopDetails;
