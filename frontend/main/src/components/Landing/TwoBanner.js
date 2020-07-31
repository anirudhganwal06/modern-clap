import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TwoBanner = () => {
  return (
    <div className="dv_middle_two_banner">
      <Container>
        <Row>
          <Col md={6} xs={12} className="dv_middle_two_banner_6">
            <Link to="#!">
              <img
                src="https://k.nooncdn.com/cms/pages/20200625/fe9f59a1f6da2be0610e358552c855df/en_slider-01.gif"
                alt=""
              />
            </Link>
          </Col>
          <Col md={6} xs={12} className="dv_middle_two_banner_6">
            <Link to="#!">
              <img
                src="https://k.nooncdn.com/cms/pages/20200625/fe9f59a1f6da2be0610e358552c855df/en_slider-01.gif"
                alt=""
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TwoBanner;
