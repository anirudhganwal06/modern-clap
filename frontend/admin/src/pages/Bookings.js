import React, { useState } from 'react';
import moment from 'moment';
import { Container, Card } from 'react-bootstrap';

import Filters from '../components/Bookings/Filters';
import Search from '../components/common/Search';
import BookingsTable from '../components/Bookings/BookingsTable';
import Pagination from '../components/common/Pagination';

const Bookings = () => {
  const [filters, setFilters] = useState({
    dateRange: {
      start: moment().startOf('hour'),
      end: moment().startOf('hour').add(32, 'hour')
    },
    type: 'select',
    category: 'select'
  });

  return (
    <Container fluid>
      <h1 className="mt-4 dv_page_heading">Bookings</h1>
      <Filters
        {...filters}
        onChange={newFilters => setFilters({ ...filters, ...newFilters })}
      />
      <Card className="mb-4">
        <Card.Header>All Bookings</Card.Header>
        <Card.Body className="p-0">
          <Search />
          <BookingsTable
            bookings={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
          />
          <Pagination />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Bookings;
