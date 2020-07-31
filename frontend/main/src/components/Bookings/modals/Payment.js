import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { X } from 'react-feather';

import { ReactComponent as Tick } from '../../../svgs/tick.svg';

const Payment = ({ isOpen, close, payment, numberOfServices }) => {
  const vatAmount = (payment.subTotal * payment.vat) / 100;
  return (
    <Modal
      id="viewpayment"
      dialogClassName="dv_choose_location_md_dialog"
      show={isOpen}
      onHide={close}
    >
      <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          Payment Summery
        </ModalTitle>
        <X size={24} onClick={close} />
      </ModalHeader>
      <ModalBody
        style={{ border: 'none', padding: '15px', borderRadius: '0 0 5px 5px' }}
      >
        <div className="dv_country_based_filter">
          <div className="dv_view_cart_visible">
            <ul>
              <li>
                Total : {numberOfServices} services{' '}
                <span>{payment.currency + ' ' + payment.subTotal}</span>
              </li>
              <li>
                VAT {payment.vat}% :{' '}
                <span>{payment.currency + ' ' + vatAmount}</span>
              </li>
              <li>
                Discount :{' '}
                <span>{payment.currency + ' ' + payment.discount}</span>
              </li>
              <li>
                Grand Total :{' '}
                <span>
                  {payment.currency +
                    ' ' +
                    +(payment.subTotal + vatAmount - payment.discount)}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="dv_payment_selection">
          <Row>
            <Col xs={12} className="p-0">
              <Tick
                style={{
                  width: '20px',
                  float: 'left',
                  height: '20px',
                  margin: '5px 15px 0 20px'
                }}
              />
              {payment.status}
            </Col>
          </Row>
        </div>
      </ModalBody>
    </Modal>
  );
};

Payment.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  payment: PropTypes.object.isRequired,
  numberOfServices: PropTypes.number.isRequired
};

export default Payment;
