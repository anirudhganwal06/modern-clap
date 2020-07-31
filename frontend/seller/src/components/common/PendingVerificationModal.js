import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap';

import { ReactComponent as TickSVG } from '../../svgs/tick.svg';
import { Edit2, ChevronLeft } from 'react-feather';

const PendingVerificationModal = ({ isOpen, close }) => {
  return (
    <Modal
      id="pendingverification"
      className="fade p-0"
      show={isOpen}
      onHide={close}
      style={{ display: 'block', paddingRight: '12px' }}
    >
      <Modal.Body className="p-0">
        <ul className="dv_verification_pending">
          <li>
            <a href="#!" style={{ fontFamily: 'Segoe ui bold' }}>
              2 Verification Pending
            </a>
          </li>
          <li>
            <a href="#!" style={{ color: '#007bff' }}>
              <TickSVG style={{ width: '15px', margin: '0 10px 0 0' }} />{' '}
              Email ID Verified <br />
              <span style={{ color: '#d7d7d7' }}>demo@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="#!" style={{ color: '#ff4a4a' }}>
              Mobile No <br />
              <span
                style={{
                  color: '#d7d7d7',
                  display: 'block',
                  margin: '10px 0 0 0'
                }}
              >
                919444488994 <Edit2 width="12" color="#ff4a4a" />
              </span>
              <Button
                style={{
                  padding: '3px 10px',
                  textTransform: 'uppercase',
                  borderRadius: '15px',
                  fontSize: '11px',
                  margin: '10px 0'
                }}
                variant="primary"
              >
                Send OTP{' '}
              </Button>{' '}
            </a>
          </li>
          <li>
            <a href="#!">
              <div className="col-md-12 p-2">
                <div className="form-group">
                  <label>Enter OTP </label>
                  <input
                    type="tel"
                    className="form-control dv_all_inputs"
                    placeholder="****"
                  />
                </div>
              </div>
              <div className="col-md-12 p-2">
                <Button
                  variant="primary"
                  block={true}
                  style={{ padding: '12px 0' }}
                >
                  Verify
                </Button>
                <span
                  style={{
                    cursor: 'pointer',
                    color: 'red',
                    display: 'block',
                    margin: '10px 0'
                  }}
                >
                  Resend
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="#!">
              <div className="col-md-12 p-2">
                <div className="form-group">
                  <label>Edit Phone No </label>
                  <input
                    type="tel"
                    className="form-control dv_all_inputs"
                    name
                    placeholder="Enter Mobile No"
                  />
                </div>
              </div>
              <div className="col-md-12 p-2">
                <Button
                  variant="primary"
                  block={true}
                  style={{ padding: '12px 0' }}
                >
                  Get OTP
                </Button>
              </div>
              <span
                style={{
                  cursor: 'pointer',
                  color: '#282828',
                  display: 'block',
                  margin: '10px 0'
                }}
              >
                <ChevronLeft style={{ width: '20px', color: '#d7d7d7' }} />{' '}
                Go Back
              </span>
            </a>
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

PendingVerificationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default PendingVerificationModal;
