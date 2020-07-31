import React from 'react';
import PropTypes from 'prop-types';

import { Card, Row, Col, Form } from 'react-bootstrap';
import { DateRangePicker } from 'react-bootstrap-daterangepicker';
import moment from 'moment';

const Filters = ({ onChange, ...props }) => {
  const providers = ['All', 'Provider 1', 'Provider 2'];
  const serviceTypes = [
    'All',
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
  const paymentTypes = ['All', 'Active', 'Inactive', 'Pending Verifications'];

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
          {/* Provider */}
          <Col xs={12} lg={3}>
            <Form.Group>
              <label>Provider</label>
              <Form.Control
                as="select"
                className="dv_all_inputs"
                value={props.provider}
                onChange={e => onChange({ type: e.target.value })}
              >
                {providers.map((provider, index) => (
                  <option key={index} value={index}>
                    {provider}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>

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

          {/* Service Type  */}
          <Col xs={12} lg={3}>
            <Form.Group>
              <label>Service Type</label>
              <Form.Control
                as="select"
                className="dv_all_inputs"
                value={props.serviceType}
                onChange={e => onChange({ type: e.target.value })}
              >
                {serviceTypes.map((type, index) => (
                  <option key={index} value={index}>
                    {type}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Payment Type */}
          <Col xs={12} lg={3}>
            <Form.Group>
              <label>Payment Type</label>
              <Form.Control
                as="select"
                className="dv_all_inputs"
                value={props.paymentType}
                onChange={e => onChange({ category: e.target.value })}
              >
                {paymentTypes.map((type, index) => (
                  <option key={index} value={index}>
                    {type}
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
  provider: PropTypes.string.isRequired,
  dateRange: PropTypes.shape({
    start: PropTypes.object.isRequired,
    end: PropTypes.object.isRequired
  }).isRequired,
  serviceType: PropTypes.string.isRequired,
  paymentType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Filters;
