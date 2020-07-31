import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="dv_usefull_links">signup to our newsletter</div>
        <p>
          Become part of our global community with exclusive access to special
          offers, latest news and events.
        </p>
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Enter Email ID"
            className="dv_subscribe_us_input"
          />
          <InputGroup.Append>
            <Button
              variant="default"
              className="dv_subscribe_us_btn"
              type="submit"
            >
              Subscribe
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <div className="dv_divider" />
        <Row>
          <Col md={12}>
            <div className="dv_usefull_links">useful links</div>
            <ul className="dv_footer_menu_links">
              <li>
                <Link to="/about-us">about us </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">terms &amp; conditions </Link>
              </li>
              <li>
                <Link to="/privacy-policy">privacy policy </Link>
              </li>
              <li>
                <Link to="/blogs">blog </Link>
              </li>
              <li>
                <Link to="/reviews">reviews </Link>
              </li>
              <li>
                <Link to="#!">near me </Link>
              </li>
              <li>
                <Link to="/careers">careers </Link>
              </li>
              <li>
                <Link to="/contact-us">contact us </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="dv_divider" />
        <Row>
          <Col md={12}>
            <div className="dv_usefull_links">Service in</div>
          </Col>
          <Col md={4}>
            <div className="dv_usefull_links_inner">UAE</div>
            <ul className="dv_footer_menu_links_second">
              <li>
                <Link to="#!">Dubai </Link>
              </li>
              <li>
                <Link to="#!">Abu Dhabi </Link>
              </li>
              <li>
                <Link to="#!">Sharjha </Link>
              </li>
              <li>
                <Link to="#!">Ras al khaim </Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <div className="dv_usefull_links_inner">INDIA</div>
            <ul className="dv_footer_menu_links_second">
              <li>
                <Link to="#!">mumbai </Link>
              </li>
              <li>
                <Link to="#!">pune </Link>
              </li>
              <li>
                <Link to="#!">banglore </Link>
              </li>
              <li>
                <Link to="#!">delhi</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
