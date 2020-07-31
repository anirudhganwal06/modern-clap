import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import { Check, Edit2 } from 'react-feather';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ReviewCard from '../components/Reviews/ReviewCard';
import AddReviewCard from '../components/Reviews/AddReviewCard';

const MyReviews = () => {
  document.title = 'My Reviews | Modern clap';

  const completedReviews = [
    {
      name: 'Monika Jadhav',
      serviceName: 'Cleaners',
      reviewerName: 'Rahul Gandhi',
      imgSrc: './images/review-holder.webp',
      rating: 4,
      reviewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo',
      date: '20/20/2020',
      time: '05:15 PM'
    },
    {
      name: 'Monika Jadhav',
      serviceName: 'Cleaners',
      reviewerName: 'Rahul Gandhi',
      imgSrc: './images/review-holder.webp',
      rating: 4,
      reviewText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo',
      date: '20/20/2020',
      time: '05:15 PM'
    }
  ];
  const pendingReviews = [
    {
      name: 'Monika Jadhav',
      serviceName: 'Cleaners',
      imgSrc: './images/review-holder.webp'
    }
  ];

  const active = useLocation().hash || '#completed';

  const completedReviewsJSX = completedReviews.map((review, index) => (
    <ReviewCard
      key={index}
      name={review.name}
      serviceName={review.serviceName}
      reviewerName={review.reviewerName}
      imgSrc={review.imgSrc}
      rating={review.rating}
      reviewText={review.reviewText}
      date={review.date}
      time={review.time}
    />
  ));

  const pendingReviewsJSX = pendingReviews.map(review => (
    <AddReviewCard
      key={review.name}
      name={review.name}
      serviceName={review.serviceName}
      imgSrc={review.imgSrc}
    />
  ));

  return (
    <div className="dv_wrapper">
      <Header
        title="My Reviews"
        desc="Total 12 review by me for 120 customers with average rating is 4"
        headerClassName="dv_my_reviews_header"
      />
      <div className="dv_content">
        <div className="dv_review_counting_wrapper">
          <Container>
            <TabContainer activeKey={active}>
              <Nav
                as="ul"
                variant="tabs"
                className="dv_nav_tabs"
                style={{ margin: '0 0 30px 0' }}
                defaultActiveKey="#completed"
              >
                <Nav.Item as="li">
                  <Nav.Link as={Link} to="#completed" eventKey="#completed">
                    <Check size={24} /> Completed - {completedReviewsJSX.length}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as={Link} to="#pending" eventKey="#pending">
                    <Edit2 size={24} /> Pending - {pendingReviewsJSX.length}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="#completed">{completedReviewsJSX}</TabPane>
                <TabPane eventKey="#pending">{pendingReviewsJSX}</TabPane>
              </TabContent>
            </TabContainer>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyReviews;
