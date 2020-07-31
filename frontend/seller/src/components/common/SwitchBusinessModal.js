import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const SwitchBusinessModal = ({ isOpen, close }) => {
  return (
    <Modal className="p-0" id="changebusiness" show={isOpen} onHide={close}>
      <Modal.Body class="p-0">
        <ul className="dv_switch_business">
          <li>
            <Link to="#!">online fitness </Link>
          </li>
          <li>
            <Link to="#!">ladies salon </Link>
          </li>
          <li>
            <Link to="#!">gents salon </Link>
          </li>
          <li>
            <Link to="#!">Disinfection </Link>
          </li>
          <li>
            <Link to="#!">deep cleaning </Link>
          </li>
          <li>
            <Link to="#!">handyman </Link>
          </li>
          <li>
            <Link to="#!">pest control </Link>
          </li>
          <li>
            <Link
              to="#!"
              style={{ color: '#ff4a4a' }}
              onClick={e => {
                e.preventDefault();
                close();
              }}
            >
              cancel
            </Link>
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

SwitchBusinessModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default SwitchBusinessModal;
