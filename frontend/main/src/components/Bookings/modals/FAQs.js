import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import { X, ChevronDown } from 'react-feather';

const FAQs = ({ isOpen, close }) => {
  return (
    <Modal
      id="faqsquestion"
      dialogClassName="dv_faqs_md_dialog"
      show={isOpen}
      onHide={close}
    >
      <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          FAQ&apos;s Question
        </ModalTitle>
        <X size={24} onClick={close} />
      </ModalHeader>
      <ModalBody
        style={{
          border: 'none',
          maxHeight: '90%',
          padding: '15px',
          borderRadius: '0 0 5px 5px',
          overflow: 'auto'
        }}
      >
        <Accordion>
          <Card>
            <Card.Header className="dv_faq_card_header">
              <Accordion.Toggle as={Card.Link} variant="link" eventKey="0">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className="dv_divider_in_booking_request" />
          <Card>
            <Card.Header className="dv_faq_card_header">
              <Accordion.Toggle as={Card.Link} variant="link" eventKey="1">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className="dv_divider_in_booking_request" />
          <Card>
            <Card.Header className="dv_faq_card_header">
              <Accordion.Toggle as={Card.Link} variant="link" eventKey="2">
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
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <p className="dv_sub_headings_para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className="dv_divider_in_booking_request" />
          <Card>
            <Card.Header className="dv_faq_card_header">
              <Accordion.Toggle as={Card.Link} variant="link" eventKey="3">
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
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <p className="dv_sub_headings_para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className="dv_divider_in_booking_request" />
          <Card>
            <Card.Header className="dv_faq_card_header">
              <Accordion.Toggle as={Card.Link} variant="link" eventKey="4">
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
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <p className="dv_sub_headings_para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className="dv_divider_in_booking_request" />
          <Card>
            <Card.Header className="dv_faq_card_header">
              <Accordion.Toggle as={Card.Link} variant="link" eventKey="5">
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
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <p className="dv_sub_headings_para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </ModalBody>
    </Modal>
  );
};

FAQs.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default FAQs;
