import React from 'react';
import PropTypes from 'prop-types';

import { Card, Row, Col, Form } from 'react-bootstrap';
import { DateRangePicker } from 'react-bootstrap-daterangepicker';
import moment from 'moment';

const Filters = ({ onChange, ...props }) => {
  const customerTypes = [
    'All',
    'New customer',
    'Existing customer',
    'Waller payment'
  ];

  const bookings = ['All'];
  for (let i = 1; i <= 10; i++) bookings.push(`${i} Time`);
  bookings.push('10+ Time');

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

          {/* Customer Type Filter */}
          <Col xs={12} lg={3}>
            <Form.Group>
              <label>Customer Type </label>
              <Form.Control
                as="select"
                className="dv_all_inputs"
                value={props.customerType}
                onChange={e => onChange({ type: e.target.value })}
              >
                {customerTypes.map((customerType, index) => (
                  <option key={index} value={index}>
                    {customerType}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Number of bookings Filter */}
          <Col xs={12} lg={3}>
            <Form.Group>
              <label>Bookings</label>
              <Form.Control
                as="select"
                className="dv_all_inputs"
                value={props.booking}
                onChange={e => onChange({ category: e.target.value })}
              >
                {bookings.map((booking, index) => (
                  <option key={index} value={index}>
                    {booking}
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
  customerType: PropTypes.string.isRequired,
  booking: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Filters;
