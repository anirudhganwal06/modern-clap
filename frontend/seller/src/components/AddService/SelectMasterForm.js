import React from 'react';
import { Card, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SelectMasterForm = () => {
  return (
    <React.Fragment>
      <Card.Header>
        Select Master Form
        <Link
          to="/services"
          style={{
            background: '#007bff',
            color: '#ffffff',
            textTransform: 'uppercase',
            padding: '5px',
            fontSize: '12px',
            borderRadius: '5px',
            float: 'right',
            position: 'absolute',
            right: '10px',
            top: '10px'
          }}
        >
          View all
        </Link>
      </Card.Header>
      <Row className="p-3">
        <Col xs={12} lg={4}>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" className="dv_all_inputs">
              <option>Select </option>
              <option>Cleaners </option>
              <option>Online Fitness </option>
              <option>Ladies Salon </option>
              <option>Gents Salon </option>
              <option>Disinfection </option>
              <option>Deep Cleaning </option>
              <option>Handyman </option>
              <option>Electrician </option>
              <option>Painters </option>
              <option>Packers &amp; Movers </option>
              <option>AC Technicians </option>
              <option>Pest COntrol </option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" className="dv_all_inputs">
              <option>Category </option>
              <option>Home</option>
              <option>Villa</option>
              <option>Office</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <Form.Label>Service</Form.Label>
            <Form.Control as="select" className="dv_all_inputs">
              <option>Category </option>
              <option>All </option>
              <option>Kitchen cleaning </option>
              <option>Bedroom cleaning </option>
              <option>Bathroom cleaning </option>
              <option>Living Room cleaning </option>
              <option>Untesil cleaning </option>
              <option>Iron with folding cloths </option>
              <option>Machine Laundry </option>
              <option>Refrigerator Cleaning </option>
              <option>Ovan &amp; Microwave Cleaning </option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default SelectMasterForm;
