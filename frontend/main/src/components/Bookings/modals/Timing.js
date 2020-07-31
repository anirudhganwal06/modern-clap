import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import Button from 'react-bootstrap/Button';
import { X } from 'react-feather';

import { ReactComponent as Clock } from '../../../svgs/clock.svg';
import TimingSelector from '../../common/TimingSelector';

const Timing = ({ isOpen, close }) => {
  return (
    <Modal
      id="resheduletime"
      dialogClassName="dv_reschedule_time_md_dialog"
      show={isOpen}
      onHide={close}
    >
      <ModalHeader>
        <ModalTitle
          style={{
            color: '#282828',
            fontSize: '18px',
            textAlign: 'left',
            display: 'block',
            width: '100%'
          }}
        >
          <Clock
            style={{
              width: '30px',
              height: '30px',
              fontSize: '18px',
              float: 'left',
              margin: '0 15px 0 0'
            }}
          />
          Reshdule the time
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
        <TimingSelector />
        <Button
          style={{
            backgroundColor: '#2874f0',
            margin: '15px 0 0 0',
            padding: '15px 0',
            textTransform: 'uppercase',
            fontWeight: 600,
            borderColor: '#2874f0'
          }}
          variant="success"
          block
        >
          Reshedule
        </Button>
      </ModalBody>
    </Modal>
  );
};

Timing.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default Timing;
