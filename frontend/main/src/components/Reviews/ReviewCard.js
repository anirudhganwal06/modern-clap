import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Star } from 'react-feather';

import { ReactComponent as Tick } from '../../svgs/tick.svg';

const ReviewCard = props => {
  return (
    <div className="dv_review_cards">
      <img src={props.imgSrc} alt={props.name} />
      <div className="dv_review_holder_name_review">
        <span className="dv_name_holder">
          <Tick className="mr-2" height={20} width={20} />
          {props.name}
          <span style={{ fontSize: '14px' }}>
            <Star
              size={15}
              style={{
                fill: '#0eca0e',
                color: '#0eca0e',
                margin: '-4px 0 0 5px'
              }}
            />
            {' ' + props.rating}
          </span>
        </span>
        <span className="dv_review_against">
          Review against <strong>{props.serviceName}</strong> from{' '}
          <Link to="#!">{props.reviewerName}</Link>
        </span>
        <span className="dv_review_txt">{props.reviewText}</span>
        <div className="dv_review_date_time">
          {props.date + ', ' + props.time}
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
  reviewerName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default ReviewCard;
