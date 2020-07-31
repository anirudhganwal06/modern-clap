import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Search from '../components/common/Search';
import { Link } from 'react-router-dom';
import TypesTable from '../components/Types/TypesTable';
import Pagination from '../components/common/Pagination';

const Types = () => {
  return (
    <Container fluid>
      <h1 className="mt-4 dv_page_heading">Types</h1>
      <Card className="mb-4">
        <Card.Header>
          All Types
          <Link to="/services/add" className="add_new_button">
            add new
          </Link>
        </Card.Header>
        <Card.Body className="p-0">
          <Search />
          <TypesTable types={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} />
          <Pagination />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Types;
