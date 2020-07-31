import React from 'react';
import PropTypes from 'prop-types';

import { Card, Row, Col, Form } from 'react-bootstrap';

const Filters = ({ onChange, ...props }) => {
  const types = ['Select', 'Active', 'Inactive', 'Pending Verifications'];

  const categories = [
    'Select',
    'Cleaners',
    'Online Fitness',
    'Ladies Salon',
    'Gents Salon',
    'Disinfection',
    'Deep Cleaning',
    'Handymen',
    'Electrician',
    'Painter',
    'Packers & Movers',
    'AC Technicians',
    'Pest Control'
  ];

  return (
    <Card className="mb-4">
      <Card.Header>Search</Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12} lg={3}>
            <Form.Group>
              <label>Type </label>
              <Form.Control
                as="select"
                className="dv_all_inputs"
                value={props.type}
                onChange={e => onChange({ type: e.target.value })}
              >
                {types.map((type, index) => (
                  <option key={index} value={index}>
                    {type}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs={12} lg={3}>
            <Form.Group>
              <label>Category</label>
              <Form.Control
                as="select"
                className="dv_all_inputs"
                value={props.category}
                onChange={e => onChange({ category: e.target.value })}
              >
                {categories.map((category, index) => (
                  <option key={index} value={index}>
                    {category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

Filters.propTypes = {
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Filters;
