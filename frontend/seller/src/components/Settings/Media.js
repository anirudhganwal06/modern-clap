import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';

const Media = ({ active, setActive }) => {
  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">
        Media
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
            onClick={() => setActive('media')}
          >
            edit
          </Link>
        )}
      </h4>
      {active && (
        <Row className="p-3">
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Trade License </label>
              <FormControl
                type="text"
                className="dv_all_inputs"
                placeholder="Trade License"
                defaultValue="KJ65423578JB23"
                disabled
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <label>Expiry Date </label>
              <FormControl
                type="text"
                className="dv_all_inputs"
                placeholder="Expiry Date"
                defaultValue="12/12/2020"
                disabled
              />
            </FormGroup>
          </Col>
          <Col xs={12} lg={4}>
            <FormGroup>
              <Link to="#!" className="float-right">
                Download
              </Link>
              <label>Trade License Copy </label>
              <FormControl
                disabled
                type="text"
                className="dv_all_inputs"
                placeholder="Trade License Copy"
                defaultValue="tradeliesence.jpg"
              />
            </FormGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

Media.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
};

export default Media;
