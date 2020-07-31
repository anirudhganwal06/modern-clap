import React from 'react';

import { Container, Card } from 'react-bootstrap';

import AccountDetails from '../components/Settings/AccountDetails';
import ShopDetails from '../components/Settings/ShopDetails';
import WorkingHours from '../components/Settings/WorkingHours';
import Address from '../components/Settings/Address';
import Media from '../components/Settings/Media';
import ResetPassword from '../components/Settings/ResetPassword';
import CategoryRequestForm from '../components/common/CategoryRequestForm';

const Settings = () => {
  document.title = 'Settings - Modernclap';

  return (
    <Container fluid>
      <h1 className="mt-4 dv_page_heading">Settings</h1>
      <Card className="mb-4">
        <Card.Header>Profile</Card.Header>
        <Card.Body className="p-0">
          <AccountDetails />
          <ShopDetails />
          <WorkingHours />
          <Address />
          <Media />
          <ResetPassword />
          <CategoryRequestForm />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Settings;
