import React from 'react';
import classnames from 'classnames';

import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { ChevronRight, ChevronLeft, Star } from 'react-feather';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ReviewCard from '../components/Reviews/ReviewCard';

const reviews = [
  {
    name: 'Monika Jadhav',
    serviceName: 'Cleaners',
    reviewerName: 'Rahul Gandhi',
    rating: 5,
    imgSrc: './images/review-holder.webp',
    reviewText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo',
    date: '20/20/2020',
    time: '05:15 PM'
  },
  {
    name: 'Monika Jadhav',
    serviceName: 'Cleaners',
    reviewerName: 'Rahul Gandhi',
    rating: 4,
    imgSrc: './images/review-holder.webp',
    reviewText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo',
    date: '20/20/2020',
    time: '05:15 PM'
  },
  {
    name: 'Monika Jadhav',
    serviceName: 'Cleaners',
    reviewerName: 'Rahul Gandhi',
    rating: 3,
    imgSrc: './images/review-holder.webp',
    reviewText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo',
    date: '20/20/2020',
    time: '05:15 PM'
  }
];

const filters = [
  {
    id: 'latest',
    content: <>latest</>
  },
  {
    id: '5',
    content: (
      <>
        5 <Star />
      </>
    )
  },
  {
    id: '4',
    content: (
      <>
        4 <Star />
      </>
    )
  },
  {
    id: '3',
    content: (
      <>
        3 <Star />
      </>
    )
  },
  {
    id: '2',
    content: (
      <>
        2 <Star />
      </>
    )
  },
  {
    id: '1',
    content: (
      <>
        1 <Star />
      </>
    )
  }
];

const Reviews = () => {
  document.title = 'Reviews | Modern clap';

  const selectedFilter = (useLocation().hash || '#latest').substr(1);

  const filter = review => {
    // eslint-disable-next-line
    return selectedFilter === 'latest' ? true : selectedFilter == review.rating;
  };

  const filtersJSX = filters.map((filter, index) => (
    <li key={index}>
      <Link
        to={'#' + filter.id}
        className={classnames({
          dv_active_review_filter: filter.id === selectedFilter
        })}
      >
        {filter.content}
      </Link>
    </li>
  ));

  const reviewsJSX = reviews.filter(filter).map((review, index) => (
    <Col className="p-0" key={index} xs={12}>
      <ReviewCard
        name={review.name}
        serviceName={review.serviceName}
        reviewerName={review.reviewerName}
        rating={review.rating}
        imgSrc={review.imgSrc}
        reviewText={review.reviewText}
        date={review.date}
        time={review.time}
      />
    </Col>
  ));

  return (
    <div className="dv_wrapper">
      <Header
        title="Reviews"
        desc="Total 1,241review by 245 customers with average rating is 4.5"
        headerClassName="dv_reviews_header"
      />
      <div className="dv_content">
        <div className="dv_review_counting_wrapper">
          <Container>
            <Col xs={12} className="p-0 dv_review_filter">
              <ul className="dv_filter_reviews">{filtersJSX}</ul>
            </Col>
            {reviewsJSX}
            <div className="dv_pagination">
              <ul>
                <li>
                  <Link to="#!">
                    <ChevronLeft size={24} />
                  </Link>
                </li>
                <li>
                  <Link to="#!">1</Link>
                </li>
                <li>
                  <Link to="#!" className="dv_active_page">
                    2
                  </Link>
                </li>
                <li>...</li>
                <li>
                  <Link to="#!">3</Link>
                </li>
                <li>
                  <Link to="#!">
                    <ChevronRight size={24} />
                  </Link>
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
