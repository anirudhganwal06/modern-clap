import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const BookingCard = props => {
  const history = useHistory();

  let statusColor;
  switch (props.status) {
    case 'completed':
      statusColor = 'bg-success';
      break;
    case 'cancelled':
      statusColor = 'bg-danger';
      break;
    default:
      statusColor = 'bg-primary';
  }

  return (
    <div
      className="dv_mybooking_cards"
      onClick={() => history.push('/booking-details')}
    >
      <div className="dv_service_name">{props.serviceName}</div>
      <div className="dv_date_booking">{props.bookingDate}</div>
      <span className={'dv_status_upcoming ' + statusColor}>
        {props.status}
      </span>
      <div className="dv_card_details" style={{ color: props.detailsColor }}>
        {props.cardDetails}
      </div>
    </div>
  );
};

BookingCard.propTypes = {
  status: PropTypes.string,
  serviceName: PropTypes.string.isRequired,
  bookingDate: PropTypes.string.isRequired,
  detailsColor: PropTypes.string,
  cardDetails: PropTypes.string.isRequired
};

BookingCard.defaultProps = {
  detailsColor: '#000'
};

export default BookingCard;
