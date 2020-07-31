import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';

import { X } from 'react-feather';

import InputStepper from './InputStepper';

const Cart = ({ isOpen, close }) => {
  return (
    <Modal
      id="viewcart"
      dialogClassName="modal-dialog dv_choose_location_md_dialog"
      show={isOpen}
      onHide={close}
    >
      <ModalHeader>
        <ModalTitle style={{ color: '#282828', fontSize: '18px' }}>
          Your cart
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
        <div className="dv_view_cart_modal_wrapper">
          <div className="dv_per_view_cart_modal">
            <div className="dv_service_prices_add_minus_btn_wrapper">
              <div className="dv_service_prices_wrapper">
                <span className="dv_service_name">
                  African braids service 1
                </span>
              </div>
              <div className="dv_plus_minus_wrapper">
                <ul className="dv_prices_cut_main">
                  <li>AED 120</li>
                  <li>AED 90</li>
                </ul>
                <InputStepper value={0} onChange={() => {}} />
              </div>
            </div>
          </div>
          <div className="dv_per_view_cart_modal">
            <div className="dv_service_prices_add_minus_btn_wrapper">
              <div className="dv_service_prices_wrapper">
                <span className="dv_service_name">
                  African braids service 1
                </span>
              </div>
              <div className="dv_plus_minus_wrapper">
                <ul className="dv_prices_cut_main">
                  <li>AED 120</li>
                  <li>AED 90</li>
                </ul>
                <InputStepper value={2} onChange={() => {}} />
              </div>
            </div>
          </div>
          <div className="dv_ciuntry_based_filter">
            <div className="dv_view_cart_visible">
              <ul>
                <li>
                  Total : 5 services <span>AED 120</span>
                </li>
                <li>
                  VAT 5% : <span>AED 6</span>
                </li>
                <li>
                  Discount : <span>AED 12</span>
                </li>
                <li>
                  Grand Total : <span>AED 114</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default Cart;
