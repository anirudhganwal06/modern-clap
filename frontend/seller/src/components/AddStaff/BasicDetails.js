import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, Row, Col } from 'react-bootstrap';

const BasicDetails = ({ onChange, ...props }) => {
  const onInputChange = e => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">Basic Details</h4>
      <Row className="p-3">
        <Col lg={4} xs={12}>
          <label>Title</label>
          <FormControl
            as="select"
            className="dv_all_inputs"
            name="title"
            value={props.title}
            onChange={onInputChange}
          >
            <option>Mr</option>
            <option>Ms</option>
          </FormControl>
        </Col>
        <Col lg={4} xs={12}>
          <label>First Name</label>
          <FormControl
            type="text"
            className="dv_all_inputs"
            placeholder="Enter"
            name="firstName"
            value={props.firstName}
            onChange={onInputChange}
          />
        </Col>
        <Col lg={4} xs={12}>
          <label>Last Name</label>
          <FormControl
            type="text"
            className="dv_all_inputs"
            placeholder="Enter"
            name="lastName"
            value={props.lastName}
            onChange={onInputChange}
          />
        </Col>
        <Col lg={4} xs={12}>
          <label>Mobile No </label>
          <FormControl
            type="text"
            className="dv_all_inputs"
            placeholder="Enter"
            name="mobile"
            value={props.mobile}
            onChange={onInputChange}
          />
        </Col>
        <Col lg={8} xs={12}>
          <label>Add Profession </label>
          <FormControl
            type="text"
            className="dv_all_inputs"
            placeholder="Enter"
            name="profession"
            value={props.profession}
            onChange={onInputChange}
          />
        </Col>
      </Row>
    </div>
  );
};

BasicDetails.propTypes = {
  title: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default BasicDetails;
