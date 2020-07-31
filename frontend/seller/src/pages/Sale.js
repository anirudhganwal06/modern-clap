import React, { useState } from 'react';
import moment from 'moment';

import { Link } from 'react-router-dom';
import { Container, Col, Row, Card, Dropdown, Alert } from 'react-bootstrap';
import SwitchBusiness from '../components/common/SwitchBusiness';
import NumberCard from '../components/common/NumberCard';
import Filters from '../components/Sale/Filters';
import SalesTable from '../components/Sale/SalesTable';

const Sale = () => {
  document.title = 'Sale - Modernclap';

  const orders = [
    {
      createdOn: '12/12/2020',
      id: 'MD12345',
      customer: 'sanika shinde',
      totalAmount: 100,
      revenue: 20,
      mdRevenue: 80,
      penalty: 5,
      paymentType: 'cash'
    },
    {
      createdOn: '12/12/2020',
      id: 'MD12345',
      customer: 'sanika shinde',
      totalAmount: 100,
      revenue: 20,
      mdRevenue: 80,
      penalty: 5,
      paymentType: 'cash'
    },
    {
      createdOn: '12/12/2020',
      id: 'MD12345',
      customer: 'sanika shinde',
      totalAmount: 100,
      revenue: 20,
      mdRevenue: 80,
      penalty: 5,
      paymentType: 'cash'
    },
    {
      createdOn: '12/12/2020',
      id: 'MD12345',
      customer: 'sanika shinde',
      totalAmount: 100,
      revenue: 20,
      mdRevenue: 80,
      penalty: 5,
      paymentType: 'cash'
    },
    {
      createdOn: '12/12/2020',
      id: 'MD12345',
      customer: 'sanika shinde',
      totalAmount: 100,
      revenue: 20,
      mdRevenue: 80,
      penalty: 5,
      paymentType: 'cash'
    },
    {
      createdOn: '12/12/2020',
      id: 'MD12345',
      customer: 'sanika shinde',
      totalAmount: 100,
      revenue: 20,
      mdRevenue: 80,
      penalty: 5,
      paymentType: 'cash'
    }
  ];

  const [filters, setFilters] = useState({
    dateRange: {
      start: moment().startOf('hour'),
      end: moment().startOf('hour').add(32, 'hour')
    },
    type: 'select',
    category: 'select',
    payment: 'select'
  });

  return (
    <Container fluid>
      <SwitchBusiness
        title="Goodhand Transaction LLC"
        options={[
          'Change',
          'Orville Real Estate',
          'Lightspeed General Trading',
          'Alahsa Stone',
          'TOG'
        ]}
      />

      <h1 className="mt-4 dv_page_heading">Sale</h1>

      <Row>
        <ul className="dv_daily_week_yesterday_sale">
          <li>
            <Link to="#!">a week sale </Link>
          </li>
          <li>
            <Link to="#!">yesterday sale </Link>
          </li>
          <li>
            <Link to="#!" className="active">
              daily sale
            </Link>
          </li>
        </ul>

        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Total Appointments" value={21} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Completed" value={21} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="In Progress" value={21} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Rejected" value={21} />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={12}>
          <Alert variant="warning" className="m-0 border-radius-11">
            <strong>Notice: </strong> If you want to send money to modernclap
            account of commssion then <Link to="#!">click here </Link> to get Bank
            Details of Modernclap company.
          </Alert>
        </Col>
      </Row>

      <Filters
        {...filters}
        onChange={newFilters => setFilters({ ...filters, ...newFilters })}
      />

      <Card className="mb-4">
        <Card.Header>
          <Card.Title className="float-left">Total Sale</Card.Title>
          <Dropdown className="dv_download_report">
            <Dropdown.Toggle as="a" title="Export" id="addnewshortcut">
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight>
              <Dropdown.Item as={Link} to="#!">
                Excel
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#!">
                CSV
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Header>
        <Card.Body className="p-0">
          <SalesTable orders={orders} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Sale;
