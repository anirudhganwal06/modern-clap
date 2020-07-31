import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

import ServicesTable from '../components/Services/ServicesTable.';
import Filters from '../components/Services/Filters';

const Services = () => {
  document.title = 'Services - Modernclap';

  const services = [
    {
      id: 'SD1234',
      type: 'Cleaners',
      category: 'deep cleeaning',
      name: 'kitchen cleaning service',
      active: true
    },
    {
      id: 'SD1234',
      type: 'Cleaners',
      category: 'deep cleeaning',
      name: 'kitchen cleaning service',
      active: true
    },
    {
      id: 'SD1234',
      type: 'Cleaners',
      category: 'deep cleeaning',
      name: 'kitchen cleaning service',
      active: true
    },
    {
      id: 'SD1234',
      type: 'Cleaners',
      category: 'deep cleeaning',
      name: 'kitchen cleaning service',
      active: true
    },
    {
      id: 'SD1234',
      type: 'Cleaners',
      category: 'deep cleeaning',
      name: 'kitchen cleaning service',
      active: false
    }
  ];

  const [filters, setFilters] = useState({
    type: 'select',
    category: 'select'
  });

  return (
    <Container fluid>
      <h1 className="mt-4 dv_page_heading">Services</h1>
      <Filters
        {...filters}
        onChange={newFilters => setFilters({ ...filters, ...newFilters })}
      />
      <Card className="mb-4">
        <Card.Header>
          All Services
          <Link to="/services/add" className="add_new_button">
            add new
          </Link>
        </Card.Header>
        <Card.Body className="p-0">
          <ServicesTable services={services} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Services;
