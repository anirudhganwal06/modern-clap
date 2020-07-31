import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ReactComponent as WhoWeAre } from '../../svgs/who-we-are.svg';
import { ReactComponent as WhatWeDo } from '../../svgs/what-we-do.svg';
import { ReactComponent as WhyChooseUs } from '../../svgs/why-choose-us.svg';
import { ReactComponent as ProfessionalProviders } from '../../svgs/professional-providers.svg';
import { ReactComponent as HappyCustomers } from '../../svgs/happy-customers.svg';
import { ReactComponent as Location } from '../../svgs/location.svg';
import { ReactComponent as Countries } from '../../svgs/countries.svg';

import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';

const AboutUs = () => {
  document.title = 'About us | Modern clap';

  return (
    <div className="dv_wrapper">
      <Header
        title="About us"
        desc="Appreciate for visiting our page"
        headerClassName="dv_about_us_page"
      />

      <div className="dv_content">
        <div className="dv_about_us_wrapper">
          <Container>
            <Row>
              <Col lg={4} md={12}>
                <div className="dv_about_us_cards">
                  <WhoWeAre />
                  <span className="dv_heading_about">who we are ? </span>
                  <p>
                    Urban Company (formerly UrbanClap) is India’s and the UAE’s
                    largest at-home services provider. We are an all-in-one
                    platform that helps users hire premium service
                    professionals, from beauticians and masseurs to sofa
                    cleaners, carpenters and technicians.
                  </p>
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div className="dv_about_us_cards">
                  <WhatWeDo />
                  <span className="dv_heading_about">what we do ? </span>
                  <p>
                    Urban Company provides a platform that allows skilled and
                    experienced professionals to connect with users looking for
                    specific services. All the professionals, though experienced
                    and skilled, undergo intensive training modules before being
                    allowed to list their services.
                  </p>
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div className="dv_about_us_cards">
                  <WhyChooseUs />
                  <span className="dv_heading_about">why choose us ? </span>
                  <p>
                    We having having vast local experience UAE. Our know-how
                    will help steer the patron’s way through the thick and thin
                    of bureaucracy and official procedure to choose the most
                    suitable solution to your requirement Our aim is to make
                    your life easy and allow you to focus on your experience
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="dv_four_points_wrapper">
          <Container className="text-center">
            <Row>
              <Col md={3}>
                <div className="dv_four_cards">
                  <ProfessionalProviders />
                  <span>professional providers </span>
                  <p>1000 +</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="dv_four_cards">
                  <HappyCustomers />
                  <span>Happy Customers </span>
                  <p>5000 +</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="dv_four_cards">
                  <Location />
                  <span>Location </span>
                  <p>1 </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="dv_four_cards">
                  <Countries />
                  <span>Countries </span>
                  <p>1 </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
