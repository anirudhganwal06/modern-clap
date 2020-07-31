import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Container, Card, Button } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import ServiceCard from '../components/AddService/ServiceCard';
import SelectMasterForm from '../components/AddService/SelectMasterForm';
import CategoryRequestForm from '../components/common/CategoryRequestForm';
import Loading from '../components/common/Loading';

const GET_TYPES = gql`
  query Types {
    types {
      name
    }
  }
`;

const AddService = () => {
  document.title = 'Add Service - Modernclap';

  const { loading, error } = useQuery(GET_TYPES);

  if (loading) return <Loading />;
  if (error) return <p>An Error Occured</p>;

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
