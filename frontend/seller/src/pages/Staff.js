import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import StaffTable from '../components/Staff/StaffTable';

const Staff = () => {
  document.title = 'Staff - Modernclap';

  const staffs = [
    {
      id: '157362',
      name: 'Rose Mella',
      profession: 'Hair Dresser',
      rating: 4.0,
      active: true
    },
    {
      id: '157362',
      name: 'Rose Mella',
      profession: 'Hair Dresser',
      rating: 4.0,
      active: true
    },
    {
      id: '157362',
      name: 'Rose Mella',
      profession: 'Hair Dresser',
      rating: 4.0,
      active: true
    },
    {
      id: '157362',
      name: 'Rose Mella',
      profession: 'Hair Dresser',
      rating: 4.0,
      active: true
    }
  ];

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
      <h1 className="mt-4 dv_page_heading">Staff</h1>
      <Card className="mb-4">
        <Card.Header>
          All Staff list
          <Link to="/staff/add" className="add_new_button">
            add new
          </Link>
        </Card.Header>
        <Card.Body className="p-0">
          <StaffTable staffs={staffs} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Staff;
