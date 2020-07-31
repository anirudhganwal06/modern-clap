import React from 'react';

import { Container, Card, Button } from 'react-bootstrap';

import ServiceCard from '../components/AddService/ServiceCard';
import SelectMasterForm from '../components/AddService/SelectMasterForm';
import CategoryRequestForm from '../components/common/CategoryRequestForm';

const AddService = () => {
  document.title = 'Add Service - Modernclap';

  return (
    <Container fluid>
      <h1 className="mt-4 dv_page_heading">Service</h1>
      <Card className="mb-4">
        <SelectMasterForm />
        <Card.Body className="p-0">
          <ServiceCard title="kitchen cleaning" />
          <ServiceCard title="bedroom cleaning" />
          <ServiceCard title="bathroom cleaning" />
          <ServiceCard title="living cleaning" />
          <ServiceCard title="utensil cleaning" />
          <ServiceCard title="iron with folding clothes" />
          <ServiceCard title="machine laundry" />
          <CategoryRequestForm />
          <div className="text-center p-3">
            <Button variant="primary">Send Request</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddService;
