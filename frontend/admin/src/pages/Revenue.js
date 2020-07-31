import React, { useState } from 'react';
import moment from 'moment';
import Pagination from '../components/common/Pagination';
import { Card, Container } from 'react-bootstrap';
import Filters from '../components/Revenue/Filters';
import RevenueTable from '../components/Revenue/RevenueTable';
import Search from '../components/common/Search';

const Revenue = () => {
  const [filters, setFilters] = useState({
    provider: 'all',
    dateRange: {
      start: moment().startOf('hour'),
      end: moment().startOf('hour').add(32, 'hour')
    },
    serviceType: 'all',
    paymentType: 'all'
  });

  return (
    <Container fluid>
      <h1 className="mt-4 dv_page_heading">Revenue</h1>
      <Filters
        {...filters}
        onChange={newFilters => setFilters({ ...filters, ...newFilters })}
      />
      <Card className="mb-4">
        <Card.Header>
          <Card.Title className="float-left">Revenue List</Card.Title>
          <div className="dv_download_report dropdown">
            <a
              title="Add New"
              className="dropdown-toggle"
              id="addnewshortcut"
              href="#!"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Export{' '}
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="addnewshortcut"
            >
              <a className="dropdown-item" href="#!">
                Excel
              </a>
              <a className="dropdown-item" href="#!">
                CSV
              </a>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <Search />
          <RevenueTable
            revenueList={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
          />
          <Pagination />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Revenue;
