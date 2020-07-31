import React from 'react';
import PropTypes from 'prop-types';

import { Card, Row, Col, Form } from 'react-bootstrap';
import { DateRangePicker } from 'react-bootstrap-daterangepicker';
import moment from 'moment';

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

  const getDateRange = () => {
    return (
      props.dateRange.start.format('M/DD hh:mm A') +
      ' - ' +
      props.dateRange.end.format('M/DD, hh:mm A')
    );
  };

  const dateRangePickerConfig = {
    timePicker: true,
    startDate: props.dateRange.start,
    endDate: props.dateRange.end,
    locale: {
      format: 'M/DD hh:mm A'
    },
    ranges: {
      Today: [moment().startOf('day'), moment().endOf('day')],
      Yesterday: [
        moment().subtract(1, 'days').startOf('day'),
        moment().subtract(1, 'days').endOf('day')
      ],
      'Last 7 Days': [
        moment().subtract(6, 'days').startOf('day'),
        moment().endOf('day')
      ],
      'Last 30 Days': [
        moment().subtract(29, 'days').startOf('day'),
        moment().endOf('day')
      ],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [
        moment().subtract(1, 'month').startOf('month'),
        moment().subtract(1, 'month').endOf('month')
      ]
    }
  };

  return (
    <Card className="mb-4">
      <Card.Header>Search</Card.Header>
      <Card.Body>
        <Row>
          {/* Date Range Filter */}
          <Col xs={12} lg={3}>
            <Form.Group>
              <Form.Label>Date </Form.Label>
              <DateRangePicker
                {...dateRangePickerConfig}
                containerStyles={{ width: '100%' }}
                onApply={(event, picker) =>
                  onChange({
                    dateRange: { start: picker.startDate, end: picker.endDate }
                  })
                }
              >
                <Form.Control
                  type="text"
                  className="dv_all_inputs rangepicker"
                  style={{ cursor: 'pointer' }}
                  value={getDateRange()}
                  readOnly
                />
              </DateRangePicker>
            </Form.Group>
          </Col>

          {/* Provider Type Filter */}
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

          {/* Category filter */}
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
  dateRange: PropTypes.shape({
    start: PropTypes.object.isRequired,
    end: PropTypes.object.isRequired
  }).isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Filters;
