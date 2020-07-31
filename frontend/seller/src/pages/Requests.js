import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Container } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import RequestCard from '../components/Requests/RequestCard';
import Loading from '../components/common/Loading';

const GET_REQUESTS = gql`
  query Requests {
    requests {
      requests {
        _id
        services {
          service {
            name
          }
        }
        customer {
          name
        }
        payment {
          total
        }
        status
        time
      }
    }
  }
`;
const Requests = () => {
  document.title = 'Booking List - Modernclap';

  const {loading, data} = useQuery(GET_REQUESTS, { errorPolicy: 'all' })

  if (loading) return <Loading />;

  const requests = data.requests.requests;
  // const requests = [
  //   {
  //     id: 'MD12345',
  //     customer: 'Rupali Sharma',
  //     avatar: null,
  //     services: ['Haircut', 'Spa'],
  //     payment: 250,
  //     status: 'pending'
  //   },
  //   {
  //     id: 'MD12345',
  //     customer: 'Sanjay Chavan',
  //     avatar: avatar,
  //     services: ['Haircut', 'Spa'],
  //     payment: 250,
  //     status: 'missed'
  //   },
  //   {
  //     id: 'MD12345',
  //     customer: 'Dipali Jadhav',
  //     avatar: avatar,
  //     services: ['Haircut', 'Spa'],
  //     payment: 250,
  //     status: 'accepted'
  //   },
  //   {
  //     id: 'MD12345',
  //     customer: 'Rupali Sharma',
  //     avatar: null,
  //     services: ['Haircut', 'Spa'],
  //     payment: 250,
  //     status: 'pending'
  //   },
  //   {
  //     id: 'MD12345',
  //     customer: 'Sanjay Chavan',
  //     avatar: avatar,
  //     services: ['Haircut', 'Spa'],
  //     payment: 250,
  //     status: 'missed'
  //   },
  //   {
  //     id: 'MD12345',
  //     customer: 'Dipali Jadhav',
  //     avatar: avatar,
  //     services: ['Haircut', 'Spa'],
  //     payment: 250,
  //     status: 'accepted'
  //   }
  // ];

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
      <h1 className="mt-4 dv_page_heading">Request List</h1>
      <span className="subtitle">pending request</span>
      {requests.map((request, index) => (
        <RequestCard
          key={index}
          orderId={request._id}
          name={request.customer.name}
          img={request.avatar}
          services={request.services}
          amount={request.payment.total}
          status={request.status}
        />
      ))}
      <span className="subtitle" style={{ textTransform: 'inherit' }}>
        Total we have sent you <strong>120 request </strong>
      </span>
    </Container>
  );
};

export default Requests;
