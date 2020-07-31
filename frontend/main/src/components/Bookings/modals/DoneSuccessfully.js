import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReactComponent as Tick } from '../../../svgs/tick.svg';

const DoneSuccessfully = ({ isOpen, close }) => {
  return (
    <Modal
      id="donesuccesfully"
      dialogClassName="dv_done_successfully_md_dialog"
      show={isOpen}
      onHide={close}
    >
      <ModalHeader>
        <ModalTitle
          style={{
            color: '#282828',
            fontSize: '18px',
            textAlign: 'center',
            width: '100%'
          }}
        >
          Alert
        </ModalTitle>
      </ModalHeader>
      <ModalBody
        style={{
          border: 'none',
          padding: '15px',
          borderRadius: '0 0 5px 5px'
        }}
      >
        <Row style={{ width: '100%', margin: 0, textAlign: 'center' }}>
          <Col xs={12} className="p-0">
            <Tick
              style={{
                width: '20px',
                float: 'none',
                height: '20px',
                margin: '0 15px 0 0'
              }}
            />
            Succesfully Done
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

DoneSuccessfully.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default DoneSuccessfully;
