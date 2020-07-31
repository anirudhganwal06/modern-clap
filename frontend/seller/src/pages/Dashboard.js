import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NumberCard from '../components/common/NumberCard';
import SwitchBusiness from '../components/common/SwitchBusiness';
import AreaChart from '../components/Dashboard/AreaChart';
import LatestBookingsTable from '../components/Dashboard/LatestBookingsTable';

const Dashboard = () => {
  document.title = 'Dashboard - Modernclap';

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
      <h1 className="mt-4 dv_page_heading">Dashboard</h1>
      <Row>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Total Appointments" value={32} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Completed" value={21} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="In Progress" value={7} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Rejected" value={4} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Average Rating" value={4.0} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Tools Rating" value={3.9} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Work Rating" value={4.1} />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <NumberCard title="Behaviour Rating" value={4.0} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Card className="mb-4">
            <Card.Header>
              <FontAwesomeIcon icon="chart-area" className="mr-1" />
              Current week Bookings
            </Card.Header>
            <Card.Body>
              <AreaChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Card className="mb-4">
            <Card.Header>
              <FontAwesomeIcon icon="table" className="mr-1" />
              Latest Bookings
            </Card.Header>
            <Card.Body className="p-0">
              <LatestBookingsTable />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
