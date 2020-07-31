import React, { useState } from 'react';
import moment from 'moment';
import { Container, Card } from 'react-bootstrap';

import Filters from '../components/Customers/Filters';
import Search from '../components/common/Search';
import CustomersTable from '../components/Customers/CustomersTable';

const Customers = () => {
  const [filters, setFilters] = useState({
    dateRange: {
      start: moment().startOf('hour'),
      end: moment().startOf('hour').add(32, 'hour')
    },
    customerType: 'all',
    booking: 'all'
  });

  return (
    <Container fluid>
      <h1 className="mt-4 dv_page_heading">Customers</h1>
      <Filters
        {...filters}
        onChange={newFilters => setFilters({ ...filters, ...newFilters })}
      />
      <Card className="mb-4">
        <Card.Header>All Customers</Card.Header>
        <Card.Body className="p-0">
          <Search />
          <CustomersTable
            customers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Customers;
