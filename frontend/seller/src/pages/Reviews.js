import React, { useState } from 'react';

import { Container, Card } from 'react-bootstrap';
import moment from 'moment';

import SwitchBusiness from '../components/common/SwitchBusiness';
import ReviewModal from '../components/Reviews/ReviewModal';
import Filters from '../components/Reviews/Filters';
import ReviewsTable from '../components/Reviews/ReviewsTable';

const Reviews = () => {
  document.title = 'Our Reviews - Modernclap';

  const reviews = [
    {
      date: '12/12/2020',
      orderId: 'MD12345',
      toolsRating: 4,
      workRating: 3,
      behaviourRating: 5,
      overallRating: 4,
      text: 'very smart service they given to us really appreciate'
    },
    {
      date: '12/12/2020',
      orderId: 'MD12345',
      toolsRating: 4,
      workRating: 3,
      behaviourRating: 5,
      overallRating: 4,
      text: 'very smart service they given to us really appreciate'
    },
    {
      date: '12/12/2020',
      orderId: 'MD12345',
      toolsRating: 4,
      workRating: 3,
      behaviourRating: 5,
      overallRating: 4,
      text: 'very smart service they given to us really appreciate'
    },
    {
      date: '12/12/2020',
      orderId: 'MD12345',
      toolsRating: 4,
      workRating: 3,
      behaviourRating: 5,
      overallRating: 4,
      text: 'very smart service they given to us really appreciate'
    },
    {
      date: '12/12/2020',
      orderId: 'MD12345',
      toolsRating: 4,
      workRating: 3,
      behaviourRating: 5,
      overallRating: 4,
      text: 'very smart service they given to us really appreciate'
    }
  ];

  const [modal, setModal] = useState({ index: 0, isOpen: false });
  const [filters, setFilters] = useState({
    dateRange: {
      start: moment().startOf('hour'),
      end: moment().startOf('hour').add(32, 'hour')
    },
    type: 'select',
    rating: 'select',
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

      <h1 className="mt-4 dv_page_heading">Reviews</h1>

      <Filters
        {...filters}
        onChange={newFilters => setFilters({ ...filters, ...newFilters })}
      />

      <Card className="mb-4">
        <Card.Header>Ratings and Reviews</Card.Header>
        <Card.Body className="p-0">
          <ReviewsTable
            reviews={reviews}
            viewReview={index => setModal({ index: index, isOpen: true })}
          />
        </Card.Body>
      </Card>
      <ReviewModal
        isOpen={modal.isOpen}
        orderId={reviews[modal.index].orderId}
        body={reviews[modal.index].text}
        close={() => setModal({ index: 0, isOpen: false })}
      />
    </Container>
  );
};

export default Reviews;
