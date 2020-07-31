import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Bell, XCircle, Clock } from 'react-feather';

const NotificationCard = ({ type, orderNo, message }) => {
  let icon;

  switch (type) {
    case 'info':
      icon = <Bell style={{ color: '#007bff' }} />;
      break;
    case 'cancel':
      icon = <XCircle style={{ color: '#ff4a4a' }} />;
      break;
    case 'time':
      icon = <Clock style={{ color: '#fa801c' }} />;
      break;
    default:
      icon = <Bell />;
  }
  return (
    <Card className="mb-3">
      <div className="dv_notification_to_details">
        {icon}
        <Link to={'/request/' + orderNo}>{orderNo}</Link> {message}
      </div>
    </Card>
  );
};

NotificationCard.propTypes = {
  type: PropTypes.string.isRequired,
  orderNo: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

NotificationCard.defaultProps = {
  type: 'default'
};

export default NotificationCard;
