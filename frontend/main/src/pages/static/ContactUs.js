import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';

import { ReactComponent as Mobile } from '../../svgs/mobile.svg';
import { ReactComponent as Telephone } from '../../svgs/telephone.svg';
import { ReactComponent as Email } from '../../svgs/email.svg';

const ContactUs = () => {
  document.title = 'Contact us | Modern clap';

  return (
    <div className="dv_wrapper">
      <Header
        title="Contact Us"
        desc="Get in touch to know and grow..!"
        headerClassName="dv_contact_us_header"
      />
      <div className="dv_content">
        <div className="dv_contactus_wrapper">
          <Container className="text-center">
            <Row>
              <Col md={4} xs={12}>
                <div className="dv_contact_cards">
                  <Mobile className="mb-4" height={50} width={50} />
                  <span>Mobile </span>
                  <ul>
                    <li>
                      <a href="tel:+971565476598">+971 56 547 6598 </a>
                    </li>
                    <li>
                      <a href="tel:+971565476598">+971 56 547 6598 </a>
                    </li>
                    <li>
                      <a href="tel:+971565476598">+971 56 547 6598 </a>
                    </li>
                    <li>
                      <a href="tel:+971565476598">+971 56 547 6598 </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <div className="dv_contact_cards">
                  <Telephone className="mb-4" height={50} width={50} />
                  <span>Telephone </span>
                  <ul>
                    <li>
                      <a href="tel:+97145476598">+971 4 547 6598 </a>
                    </li>
                    <li>
                      <a href="tel:+97145476598">+971 4 547 6598 </a>
                    </li>
                    <li>
                      <a href="tel:+97145476598">+971 4 547 6598 </a>
                    </li>
                    <li>
                      <a href="tel:+97145476598">+971 4 547 6598 </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <div className="dv_contact_cards">
                  <Email className="mb-4" height={50} width={50} />
                  <span>Email us </span>
                  <ul>
                    <li>
                      <a href="mailto:info@modernclap.com">
                        info@modernclap.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:contact@modernclap.com">
                        contact@modernclap.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:sales@modernclap.com">
                        sales@modernclap.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:enquiry@modernclap.com">
                        enquiry@modernclap.com
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="dv_contact_form">
          <Container>
            <Row>
              <Col md={12}>
                <h4 className="dv_contact_form_heading">
                  Feel free to contact us
                </h4>
                <FormControl
                  type="text"
                  className="dv_careers_form_input"
                  placeholder="Full Name"
                />
                <FormControl
                  type="text"
                  className="dv_careers_form_input"
                  placeholder="Orgnization Name"
                />
                <FormControl
                  type="text"
                  className="dv_careers_form_input"
                  placeholder="Email ID"
                />
                <FormControl
                  type="text"
                  className="dv_careers_form_input"
                  placeholder="Contact No"
                />
                <FormControl
                  type="text"
                  className="dv_careers_form_input"
                  placeholder="Message"
                />
                <Button type="button" className="btn-default dv_submit_Career">
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="dv_contact_map">
          <Container>
            <iframe
              title="location"
              className="dv_map_iframe"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d84069.67301395387!2d55.26595669578918!3d25.21639188364983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1592722383879!5m2!1sen!2sae"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              frameBorder={0}
            />
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
