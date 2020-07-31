import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import { X, List, CreditCard } from 'react-feather';

const Services = ({ isOpen, close, services, payment }) => {
  const servicesJSX = services.map(service => (
    <li key={service} style={{ display: 'block', margin: '0 0 15px 0' }}>
      <Link to="#!">
        <strong>{service}</strong>
      </Link>
    </li>
  ));

  return (
    <Modal
      id="viewrequestdetails"
      dialogClassName="dv_choose_location_md_dialog"
      show={isOpen}
      onHide={close}
    >
      <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          Booking Details
        </ModalTitle>
        <X size={24} onClick={close} />
      </ModalHeader>
      <ModalBody
        style={{
          border: 'none',
          padding: '15px',
          borderRadius: '0 0 5px 5px'
        }}
      >
        <div className="dv_country_based_filter">
          <ul className="dv_country_based_ul">
            <li>
              <List size={24} /> Services
            </li>
            {servicesJSX}
          </ul>
          <ul className="dv_country_based_ul">
            <li>
              <CreditCard size={24} /> Amount
            </li>
            <li>
              <Link to="#!">
                <strong>{payment.currency + ' ' + payment.subTotal}</strong>
              </Link>
            </li>
          </ul>
        </div>
      </ModalBody>
    </Modal>
  );
};

Services.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  services: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  payment: PropTypes.object.isRequired
};

export default Services;
