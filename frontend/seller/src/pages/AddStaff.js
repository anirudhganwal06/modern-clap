import React, { useState } from 'react';

import { Container, Card, Row, Col, Button } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import { Link } from 'react-router-dom';
import NumberCard from '../components/common/NumberCard';
import BasicDetails from '../components/AddStaff/BasicDetails';
import UserPermissions from '../components/AddStaff/UserPermissions';
import AccountDetails from '../components/AddStaff/AccountDetails';
import Certification from '../components/AddStaff/Certification';
import OtherBusinesses from '../components/AddStaff/OtherBusinesses';

const AddStaff = () => {
  document.title = 'Add Staff - Modernclap';

  const averageRating = 4.5;
  const toolsRating = 4.5;
  const workRating = 4.5;
  const behaviourRating = 4.5;

  const [basicDetails, setBasicDetails] = useState({
    title: 'Mr',
    firstName: '',
    lastName: '',
    mobile: '',
    profession: ''
  });

  const [userPermissions, setUserPermissions] = useState({
    dashboard: 0,
    notification: 0,
    inbox: 0,
    requestList: 0,
    acceptedRequest: 0,
    service: 0,
    staff: 0,
    sale: 0,
    review: 0,
    setting: 0
  });

  const [accountDetails, setAccountDetails] = useState({
    email: '',
    password: '',
    reenterPassword: ''
  });

  const [otherBusinesses, setOtherBusinesses] = useState({
    cleaners: false,
    onlineFitness: false,
    ladiesSalon: false,
    gentsSalon: false,
    deepCleaning: false,
    handymen: false,
    acTechnician: false,
    painters: false
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

      <h1 className="mt-4 dv_page_heading">Staff </h1>
      <Card className="mb-4">
        <Card.Header>
          Staff Details
          <Link
            to="/staffs"
            style={{
              background: '#007bff',
              color: '#ffffff',
              textTransform: 'uppercase',
              padding: '5px',
              fontSize: '12px',
              borderRadius: '5px',
              float: 'right',
              position: 'absolute',
              right: '10px',
              top: '10px'
            }}
          >
            View all
          </Link>
        </Card.Header>
        <Card.Body className="p-0">
          <div className="dv_per_service_wrapper">
            <h4 className="view_request_title">Performance</h4>
            <Row className="p-3">
              <Col xl={3} md={6} xs={12}>
                <NumberCard title="Average Rating" value={averageRating} />
              </Col>
              <Col xl={3} md={6} xs={12}>
                <NumberCard title="Tools Rating" value={toolsRating} />
              </Col>
              <Col xl={3} md={6} xs={12}>
                <NumberCard title="Work Rating" value={workRating} />
              </Col>
              <Col xl={3} md={6} xs={12}>
                <NumberCard title="Behaviour Rating" value={behaviourRating} />
              </Col>
            </Row>
          </div>
          <BasicDetails
            {...basicDetails}
            onChange={input => setBasicDetails({ ...basicDetails, ...input })}
          />
          <UserPermissions
            {...userPermissions}
            onChange={input => {
              setUserPermissions({ ...userPermissions, ...input });
            }}
          />
          <AccountDetails
            {...accountDetails}
            onChange={input =>
              setAccountDetails({ ...accountDetails, ...input })
            }
          />
          <Certification />
          <OtherBusinesses
            {...otherBusinesses}
            onChange={input =>
              setOtherBusinesses({ ...otherBusinesses, ...input })
            }
          />
        </Card.Body>
      </Card>
      <Col md={12} className="text-center mb-4">
        <Button variant="primary">Save Details </Button>
      </Col>
    </Container>
  );
};

export default AddStaff;
