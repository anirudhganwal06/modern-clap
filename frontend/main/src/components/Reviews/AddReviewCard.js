import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as Tick } from '../../svgs/tick.svg';

const AddReviewCard = props => {
  return (
    <div className="dv_review_cards">
      <img src={props.imgSrc} alt={props.name} />
      <div className="dv_review_holder_name_review">
        <span className="dv_name_holder">
          <Tick className="mr-2" size={20} />
          {props.name}
        </span>
        <span className="dv_review_against">
          <strong>{props.serviceName}</strong> service has been succesfully
          done. but review is Pending from your side.
        </span>
        <Link
          to="#!"
          style={{
            color: '#2874f0',
            textTransform: 'capitalize',
            fontSize: '13px',
            display: 'block',
            margin: '15px 0 0 0'
          }}
        >
          Add Review
        </Link>
      </div>
    </div>
  );
};

AddReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
};

export default AddReviewCard;
