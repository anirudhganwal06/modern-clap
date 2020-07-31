import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import Header from '../components/common/Header';
import RepeatSlider from '../components/common/RepeatSlider';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import { ReactComponent as AboutUsSVG } from '../svgs/about-us.svg';
import { ReactComponent as QuestionMarkSVG } from '../svgs/question-mark.svg';
import { ReactComponent as HandShakeSVG } from '../svgs/hand-shake.svg';
import { ReactComponent as ReviewsSVG } from '../svgs/reviews.svg';
import { Star, ChevronDown } from 'react-feather';

const ServiceDetails = () => {
  document.title = 'Service Details | Modern clap';

  const activePane = useLocation().hash || '#about';

  return (
    <div className="dv_wrapper">
      <Header
        title="Manicure Pedicure"
        desc="Hire #1 Staff For Home Services"
        headerClassName="dv_service_details_header"
        bookNow
      />
      <div className="dv_content">
        <div className="dv_service_details_information">
          <Container>
            <Row className="flex-xl-nowrap">
              <Col md={12}>
                <TabContainer activeKey={activePane}>
                  <Nav
                    as="ul"
                    variant="tabs"
                    className="dv_service_details_pages"
                    defaultActiveKey="#about"
                  >
                    <Nav.Item as="li">
                      <Nav.Link as={Link} to="#about" eventKey="#about">
                        <AboutUsSVG
                          width="20"
                          height="20"
                          style={{ margin: '0 15px 0 0' }}
                        />
                        <strong className="dv_tabs_value">- </strong> About
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link as={Link} to="#faqs" eventKey="#faqs">
                        <QuestionMarkSVG
                          width="20"
                          height="20"
                          style={{ margin: '0 15px 0 0' }}
                        />
                        <strong className="dv_tabs_value">15 </strong>{' '}
                        FAQ&apos;s
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link as={Link} to="#provider" eventKey="#provider">
                        <HandShakeSVG
                          width="20"
                          height="20"
                          style={{ margin: '0 15px 0 0' }}
                        />
                        <strong className="dv_tabs_value">21 </strong> provider
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link as={Link} to="#review" eventKey="#review">
                        <ReviewsSVG
                          width="20"
                          height="20"
                          style={{ margin: '0 15px 0 0' }}
                        />
                        <strong className="dv_tabs_value">07 </strong> Reviews
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <TabContent className="dv_tab_content_wrapper">
                    <TabPane eventKey="#about">
                      <div className="dv_service_details_about_wrapper">
                        <div className="dv_all_providers_counting">
                          manicure pedicure
                          <span>
                            A great pedicure can be as soothingto the soul as..
                            well, to the sole..!
                          </span>
                        </div>
                        <div className="dv_sub_headings">
                          heading of services
                        </div>
                        <p className="dv_sub_headings_para">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, Lorem ipsum
                          dolor sit amet, consectetur adipisicing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit
                          amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut
                          enim ad minim veniam.
                        </p>
                        <div className="dv_divider_in_booking_request" />
                        <div className="dv_sub_headings">
                          heading of services
                        </div>
                        <p className="dv_sub_headings_para">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, Lorem ipsum
                          dolor sit amet, consectetur adipisicing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit
                          amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut
                          enim ad minim veniam.
                        </p>
                        <div className="dv_divider_in_booking_request" />
                        <div className="dv_sub_headings">
                          heading of services
                        </div>
                        <ul className="dv_service_details_points">
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, Lorem
                            ipsum dolor sit amet,
                          </li>
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt..!
                          </li>
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipina
                            aliqua. Ut enim ad minim veniam, Lorem ipsum dolor
                            sit amet,
                          </li>
                        </ul>
                      </div>
                    </TabPane>
                    <TabPane eventKey="#faqs">
                      <div className="dv_service_details_faqs">
                        <div className="dv_all_providers_counting">
                          get help
                          <span>get helpfull support regarding service </span>
                        </div>
                        <Accordion>
                          <Card>
                            <Card.Header className="dv_faq_card_header">
                              <Accordion.Toggle
                                as={Card.Link}
                                variant="link"
                                eventKey="0"
                              >
                                Question will come here
                                <ChevronDown
                                  style={{
                                    float: 'right',
                                    position: 'absolute',
                                    right: '15px',
                                    top: '15px'
                                  }}
                                />
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body>
                                <p className="dv_sub_headings_para">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                          <div className="dv_divider_in_booking_request" />
                          <Card>
                            <Card.Header className="dv_faq_card_header">
                              <Accordion.Toggle
                                as={Card.Link}
                                variant="link"
                                eventKey="1"
                              >
                                Question will come here
                                <ChevronDown
                                  style={{
                                    float: 'right',
                                    position: 'absolute',
                                    right: '15px',
                                    top: '15px'
                                  }}
                                />
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body>
                                <p className="dv_sub_headings_para">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </div>
                    </TabPane>
                    <TabPane eventKey="#provider">
                      <div className="dv_per_provider_wrapper">
                        <div className="dv_all_providers_counting">
                          professional providers
                          <span>
                            18 Carpet Manicure Pedicure services in Dubai
                          </span>
                        </div>
                        <Row>
                          <Col
                            lg={6}
                            xs={12}
                            className="dv_provider_details_12"
                          >
                            <div className="dv_provider_card">
                              <div className="dv_provider_logo">
                                <img src="./images/facebook.png" alt="" />
                              </div>
                              <span
                                style={{
                                  float: 'left',
                                  position: 'absolute',
                                  left: '40px',
                                  bottom: '30px',
                                  fontWeight: 900,
                                  color: '#0eca0e'
                                }}
                              >
                                <Star
                                  style={{
                                    width: '16px',
                                    position: 'relative',
                                    top: '-2px',
                                    fill: '#0eca0e',
                                    color: '#0eca0e'
                                  }}
                                />{' '}
                                4.5
                              </span>
                              <div className="dv_provider_name">
                                lightspeed general trading llc
                              </div>
                              <div className="dv_provider_location">
                                al rigga, dubai, uae
                              </div>
                              <div className="dv_rating_from_customer">
                                &quot;professional service&quot;
                              </div>
                            </div>
                          </Col>
                          <Col
                            lg={6}
                            xs={12}
                            className="dv_provider_details_12"
                          >
                            <div className="dv_provider_card">
                              <div className="dv_provider_logo">
                                <img src="./images/facebook.png" alt="" />
                              </div>
                              <span
                                style={{
                                  float: 'left',
                                  position: 'absolute',
                                  left: '40px',
                                  bottom: '30px',
                                  fontWeight: 900,
                                  color: '#0eca0e'
                                }}
                              >
                                <Star
                                  style={{
                                    width: '16px',
                                    position: 'relative',
                                    top: '-2px',
                                    fill: '#0eca0e',
                                    color: '#0eca0e'
                                  }}
                                />{' '}
                                4.5
                              </span>
                              <div className="dv_provider_name">
                                lightspeed general trading llc
                              </div>
                              <div className="dv_provider_location">
                                al rigga, dubai, uae
                              </div>
                              <div className="dv_rating_from_customer">
                                &quot;professional service&quot;
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </TabPane>
                    <TabPane eventKey="#review">
                      <div className="dv_service_details_review_wrapper">
                        <div className="dv_all_providers_counting">
                          Reviews
                          <span>see our customer review and rating </span>
                        </div>
                        <div className="dv_total_review_section_brief">
                          <Star size={24} /> 4.5{' '}
                          <span className="dv_out_of_star"> / 5 </span>
                          <div className="dv_based_on_total_ratings">
                            based on <strong>15</strong> ratings
                          </div>
                        </div>
                        <div className="dv_customer_review_in_service_details">
                          <div className="dv_customer_name_letter">s</div>
                          <div className="dv_customer_name">sanjay sakpal</div>
                          <div className="dv_customer_review_txt">
                            &quot;
                            <span>
                              its very professionally work. and i am very
                              satisfied with this service
                            </span>
                            &quot;
                          </div>
                          <div className="dv_clearfix" />
                        </div>
                        <div className="dv_customer_review_in_service_details">
                          <div className="dv_customer_name_letter">p</div>
                          <div className="dv_customer_name">poonam</div>
                          <div className="dv_customer_review_txt">
                            &quot;
                            <span>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do
                            </span>
                            &quot;
                          </div>
                          <div className="dv_clearfix" />
                        </div>
                        <div className="dv_customer_review_in_service_details">
                          <div className="dv_customer_name_letter">p</div>
                          <div className="dv_customer_name">poonam</div>
                          <div className="dv_customer_review_txt">
                            &quot;
                            <span>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do
                            </span>
                            &quot;
                          </div>
                          <div className="dv_clearfix" />
                        </div>
                      </div>
                    </TabPane>
                  </TabContent>
                </TabContainer>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="dv_all_sliders">
          <Container>
            <div className="dv_get_more_services">explore more services</div>
          </Container>
          <RepeatSlider heading="Handymen" desc="30 days service guarantee" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
