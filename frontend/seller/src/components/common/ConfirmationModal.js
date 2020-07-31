import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap';

const ConfirmationModal = ({ isOpen, close }) => {
  return (
    <Modal
      id="areyoursuremodal"
      className="fade p-0"
      show={isOpen}
      onHide={close}
      style={{ margin: '10% auto 0px', display: 'block', paddingRight: '12px' }}
      size="sm"
    >
      <Modal.Header className="justify-content-center">
        <Modal.Title>Alert</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        are you sure you want to proceed ?
      </Modal.Body>
      <Modal.Footer className="d-block" style={{ textAlign: 'center' }}>
        <Button variant="outline-light" className="text-dark" onClick={close}>
          Wait
        </Button>
        <Button
          className="btn-primary border-radius-11"
          id="confirmation_yes"
          autoFocus={true}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default ConfirmationModal;
