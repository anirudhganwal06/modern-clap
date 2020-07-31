import React from 'react';

import { Link } from 'react-router-dom';
import { FormFile, Row, Col, Alert } from 'react-bootstrap';

const Certification = () => {
  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">Certification</h4>
      <Row className="p-3">
        <Col md={12}>
          <Alert variant="warning">
            <strong>Note : </strong> After submitting certificate you will get
            certified badge within 1 week in working days.
          </Alert>
        </Col>
        <Col lg={4} xs={12}>
          <label>Profession Certificate 1 </label>
          <FormFile custom id="cert1">
            <FormFile.Input />
            <FormFile.Label>Choose file</FormFile.Label>
          </FormFile>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
            <li style={{ display: 'inline-block', margin: 0, padding: 0 }}>
              <Link to="#!">Download</Link>
            </li>
          </ul>
        </Col>
        <Col lg={4} xs={12}>
          <label>Profession Certificate 2 </label>
          <FormFile custom id="cert2">
            <FormFile.Input />
            <FormFile.Label>Choose file</FormFile.Label>
          </FormFile>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
            <li style={{ display: 'inline-block', margin: 0, padding: 0 }}>
              <Link to="#!">Download</Link>
            </li>
          </ul>
        </Col>
        <Col lg={4} xs={12}>
          <label>Profession Certificate 3 </label>
          <FormFile custom id="cert3">
            <FormFile.Input />
            <FormFile.Label>Choose file</FormFile.Label>
          </FormFile>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
            <li style={{ display: 'inline-block', margin: 0, padding: 0 }}>
              <Link to="#!">Download</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Certification;
