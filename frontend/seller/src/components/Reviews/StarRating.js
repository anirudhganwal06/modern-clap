import React from 'react';
import PropTypes from 'prop-types';

import { Star } from 'react-feather';

const StarRating = ({ value, onChange }) => {
  const starsJSX = [];

  for (let i = 1; i <= 5; i++) {
    starsJSX.push(
      <Star
        key={i}
        fill={i <= value ? '#fcd703' : 'none'}
        onClick={() => onChange(i)}
      />
    );
  }

  return <div className="dv_give_rating">{starsJSX}</div>;
};

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func
};

export default StarRating;
