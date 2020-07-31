import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import ServicesTable from '../components/Services/ServicesTable';

const Services = () => {
  document.title = 'Services - Modernclap';

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
      <h1 className="mt-4 dv_page_heading">Services</h1>
      <Card className="mb-4">
        <Card.Header>
          Services
          <Link to="/services/add" className="add_new_button">
            add new
          </Link>
        </Card.Header>
        <Card.Body className="p-0">
          <ServicesTable />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Services;
