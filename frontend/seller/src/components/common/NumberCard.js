import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import { Codepen } from 'react-feather';

const NumberCard = props => {
  return (
    <Card className="mb-4">
      <Card.Body>{props.title}</Card.Body>
      <span className="dv_card_value_dashboard">
        {props.icon}
        {props.value}
      </span>
    </Card>
  );
};

NumberCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.object.isRequired
};

NumberCard.defaultProps = {
  icon: <Codepen />
};

export default NumberCard;
