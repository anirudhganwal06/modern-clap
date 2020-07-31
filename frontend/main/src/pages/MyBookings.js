import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BookingCard from '../components/Bookings/BookingCard';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const MyBookings = () => {
  document.title = 'My Bookings | Modern clap';

  const bookings = [
    {
      serviceName: "men's hair cut",
      bookingDate: '12/12/2020, 04:00 PM',
      status: 'upcoming',
      cardDetails: 'your request no is MD54251'
    },
    {
      serviceName: 'hair rebonding',
      bookingDate: '12/12/2020, 04:00 PM',
      status: 'completed',
      detailsColor: 'red',
      cardDetails: 'Review Pending'
    },
    {
      serviceName: 'manicure',
      bookingDate: '12/12/2020, 04:00 PM',
      status: 'cancelled',
      cardDetails: 'cancelled by customer'
    },
    {
      serviceName: 'pedicure',
      bookingDate: '12/12/2020, 04:00 PM',
      status: 'upcoming',
      cardDetails: 'your request no is MD54251'
    }
  ];

  const bookingsJSX = bookings.map(booking => (
    <Col key={booking.serviceName} lg={4} xs={12}>
      <BookingCard
        serviceName={booking.serviceName}
        bookingDate={booking.bookingDate}
        status={booking.status}
        detailsColor={booking.detailsColor}
        cardDetails={booking.cardDetails}
      />
    </Col>
  ));

  return (
    <div className="dv_wrapper">
      <Header
        title="My Bookings"
        desc="Check your all booking here to get invoice, etc"
        headerClassName="dv_my_bookings_header"
      />
      <div className="dv_content">
        <div className="dv_my_booking_wrapper">
          <Container>
            <Row>{bookingsJSX}</Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyBookings;
