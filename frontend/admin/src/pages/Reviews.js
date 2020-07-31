import React, { useState } from 'react';

import { Container, Card } from 'react-bootstrap';

import ReviewModal from '../components/Reviews/ReviewModal';
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

  return (
    <Container fluid>
      <h1 className="mt-4 dv_page_heading">Reviews</h1>
      <Card className="mb-4">
        <Card.Header>
          <Card.Title className="float-left">RATINGS AND REVIEWS</Card.Title>
          <div className="dv_download_report dropdown">
            <a
              title="Add New"
              className="dropdown-toggle"
              id="addnewshortcut"
              href="#!"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Export{' '}
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="addnewshortcut"
            >
              <a className="dropdown-item" href="#!">
                Excel
              </a>
              <a className="dropdown-item" href="#!">
                CSV
              </a>
            </div>
          </div>
        </Card.Header>
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
