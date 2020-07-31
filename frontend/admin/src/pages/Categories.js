import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Search from '../components/common/Search';
import { Link } from 'react-router-dom';
import CategoriesTable from '../components/Categories/CategoriesTable';
import Pagination from '../components/common/Pagination';

const Categories = () => {
  return (
    <Container fluid>
      <h1 className="mt-4 dv_page_heading">Categories</h1>
      <Card className="mb-4">
        <Card.Header>
          All Categories
          <Link to="/services/add" className="add_new_button">
            add new
          </Link>
        </Card.Header>
        <Card.Body className="p-0">
          <Search />
          <CategoriesTable categories={[1, 2, 3, 4, 5, 6, 7]} />
          <Pagination />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Categories;
