import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from '../components/common/Search';
import Pagination from '../components/common/Pagination';
import PromoCodesTable from '../components/PromoCodes/PromoCodesTable';

const PromoCodes = () => {
  return (
    <Container fluid>
      <h1 className="mt-4 dv_page_heading">Promo Codes</h1>
      <Card className="mb-4">
        <Card.Header>
          All Promo Codes
          <Link to="/services/add" className="add_new_button">
            add new
          </Link>
        </Card.Header>
        <Card.Body className="p-0">
          <Search />
          <PromoCodesTable
            promoCodes={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
          />
          <Pagination />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PromoCodes;
