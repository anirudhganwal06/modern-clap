import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';

import { X } from 'react-feather';
import { ReactComponent as FlagIndia } from '../../svgs/flag-india.svg';
import { ReactComponent as FlagUAE } from '../../svgs/flag-uae.svg';

const Location = ({ isOpen, close }) => {
  return (
    <Modal
      id="myModal"
      dialogClassName="dv_choose_location_md_dialog"
      show={isOpen}
      onHide={close}
    >
      <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          Choose Location
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
        <div className="dv_ciuntry_based_filter">
          <ul className="dv_country_based_ul">
            <li>
              <FlagIndia />
              India
            </li>
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
          <ul className="dv_country_based_ul">
            <li>
              <FlagUAE />
              United Arab Emirates
            </li>
            <li>
              <Link to="#!">dubai </Link>
            </li>
            <li>
              <Link to="#!">abu dhabi </Link>
            </li>
            <li>
              <Link to="#!">sharjha </Link>
            </li>
            <li>
              <Link to="#!">ras al khaim </Link>
            </li>
          </ul>
        </div>
      </ModalBody>
    </Modal>
  );
};

Location.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default Location;
