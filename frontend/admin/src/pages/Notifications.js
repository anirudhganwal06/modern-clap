import React from 'react';

import { Container } from 'react-bootstrap';

import NotificationCard from '../components/Notifications/NotificationCard';

const Notifications = () => {
  document.title = 'Notifications - Modernclap';

  const unseenNotification = [
    {
      orderNo: 'MD12345',
      message: 'Today 04:00 PM Appointment has shedule with you.',
      type: 'info'
    },
    {
      orderNo: 'MD12345',
      message: 'New Request has received..!',
      type: 'info'
    },
    {
      orderNo: 'MD12345',
      message: 'Request cancelled by customer',
      type: 'cancel'
    },
    {
      orderNo: 'MD12345',
      message: 'Request has been reshduled.',
      type: 'time'
    },
    { orderNo: 'MD12345', message: 'New Request has received..!', type: 'info' }
  ];

  const seenNotification = [
    {
      orderNo: 'MD12345',
      message: 'New Request has received..!',
      type: 'info'
    },
    {
      orderNo: 'MD12345',
      message: 'Request cancelled by customer',
      type: 'cancel'
    },
    {
      orderNo: 'MD12345',
      message: 'Request has been reshduled.',
      type: 'time'
    },
    {
      orderNo: 'MD12345',
      message: 'New Request has received..!',
      type: 'info'
    },
    {
      orderNo: 'MD12345',
      message: 'New Request has received..!',
      type: 'info'
    },
    {
      orderNo: 'MD12345',
      message: 'Request cancelled by customer',
      type: 'cancel'
    },
    {
      orderNo: 'MD12345',
      message: 'Request has been reshduled.',
      type: 'time'
    },
    { orderNo: 'MD12345', message: 'New Request has received..!', type: 'info' }
  ];

  return (
    <Container fluid>
      <h1 className="mt-4 dv_page_heading">Notifications</h1>
      <span className="subtitle">unseen notification</span>
      {unseenNotification.map((notification, index) => (
        <NotificationCard key={index} {...notification} />
      ))}
      <span className="subtitle">seen notification</span>
      {seenNotification.map((notification, index) => (
        <NotificationCard key={index} {...notification} />
      ))}
    </Container>
  );
};

export default Notifications;
