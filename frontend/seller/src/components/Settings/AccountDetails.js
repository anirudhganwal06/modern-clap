import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';
import { ReactComponent as TickSVG } from '../../svgs/tick.svg';

const AccountDetails = ({ active, setActive }) => {
  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">
        Account Details
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
            onClick={() => setActive('accountDetails')}
          >
            edit
          </Link>
        )}
      </h4>
      {active && (
        <Row className="p-3">
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Owner Full Name</label>
              <FormControl
                disabled
                type="text"
                className="dv_all_inputs"
                placeholder="Shyam Jadhav"
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>
                Email Address
                <TickSVG
                  style={{
                    width: '15px',
                    float: 'left',
                    margin: '3px 10px 0 0'
                  }}
                />
              </label>
              <FormControl
                disabled
                type="text"
                className="dv_all_inputs"
                placeholder="demo@gmail.com"
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>
                Mobile No
                <TickSVG
                  style={{
                    width: '15px',
                    float: 'left',
                    margin: '3px 10px 0 0'
                  }}
                />
              </label>
              <FormControl
                disabled
                type="text"
                className="dv_all_inputs"
                placeholder={9222266992}
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Phone No</label>
              <FormControl
                disabled
                type="text"
                className="dv_all_inputs"
                placeholder={910456789}
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Select Country</label>
              <FormControl
                disabled
                type="text"
                className="dv_all_inputs"
                placeholder="India"
              />
            </FormGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

AccountDetails.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
};

export default AccountDetails;
