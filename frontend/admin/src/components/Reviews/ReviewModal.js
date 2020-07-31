import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'react-bootstrap';
import { X } from 'react-feather';

const ReviewModal = ({ isOpen, close, orderId, body }) => {
  return (
    <Modal show={isOpen} onHide={close}>
      {/* Modal Header */}
      <Modal.Header>
        <Modal.Title>{orderId} Review</Modal.Title>
        <X
          size={24}
          style={{ float: 'right', cursor: 'pointer' }}
          onClick={close}
        />
      </Modal.Header>
      {/* Modal body */}
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
};

ReviewModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  orderId: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default ReviewModal;
