import React, { useState } from 'react';
import moment from 'moment';
import { Container, Card } from 'react-bootstrap';

import Filters from '../components/Providers/Filters';
import Search from '../components/common/Search';
import ProvidersTable from '../components/Providers/ProvidersTable';
import Selected from '../components/Providers/Selected';
import Pagination from '../components/common/Pagination';
import { Link } from 'react-router-dom';

const Providers = () => {
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
      <h1 className="mt-4 dv_page_heading">Providers</h1>
      <Filters
        {...filters}
        onChange={newFilters => setFilters({ ...filters, ...newFilters })}
      />
      <Card className="mb-4">
        <Card.Header>
          All Providers
          <Link to="/services/add" className="add_new_button">
            add new
          </Link>
        </Card.Header>
        <Selected />
        <Card.Body className="p-0">
          <Search />
          <ProvidersTable
            providers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
          />
          <Pagination />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Providers;
