import React from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import FormCheck from 'react-bootstrap/FormCheck';

import { ReactComponent as BellSVG } from '../../../svgs/bell.svg';

const AreYouSure = ({ isOpen, close }) => {
  return (
    <Modal
      id="areyousure"
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
          <BellSVG />
          Please select reason
        </ModalTitle>
      </ModalHeader>
      <ModalBody
        style={{ border: 'none', padding: '15px', borderRadius: '0 0 5px 5px' }}
      >
        <Col
          as={FormCheck}
          type="checkbox"
          custom
          xs={12}
          className="dv_take_reason_list_12"
        >
          <FormCheck.Input type="checkbox" id="reason1" name="cash" />
          <FormCheck.Label className="custom-control-label" htmlFor="reason1">
            Hired someone else
          </FormCheck.Label>
        </Col>
        <Col
          as={FormCheck}
          type="checkbox"
          custom
          xs={12}
          className="dv_take_reason_list_12"
        >
          <FormCheck.Input type="checkbox" id="reason2" name="cash" />
          <FormCheck.Label className="custom-control-label" htmlFor="reason2">
            Placed the request by mistake
          </FormCheck.Label>
        </Col>
        <Col
          as={FormCheck}
          type="checkbox"
          custom
          xs={12}
          className="dv_take_reason_list_12"
        >
          <FormCheck.Input type="checkbox" id="reason3" name="cash" />
          <FormCheck.Label className="custom-control-label" htmlFor="reason3">
            Want the service at some other time
          </FormCheck.Label>
        </Col>
        <Col
          as={FormCheck}
          type="checkbox"
          custom
          xs={12}
          className="dv_take_reason_list_12"
        >
          <FormCheck.Input type="checkbox" id="reason4" name="cash" />
          <FormCheck.Label className="custom-control-label" htmlFor="reason4">
            Beautician asked to cancel
          </FormCheck.Label>
        </Col>
        <Col
          as={FormCheck}
          type="checkbox"
          custom
          xs={12}
          className="dv_take_reason_list_12"
        >
          <FormCheck.Input type="checkbox" id="reason5" name="cash" />
          <FormCheck.Label className="custom-control-label" htmlFor="reason5">
            Did not like the beautician
          </FormCheck.Label>
        </Col>
        <Col
          as={FormCheck}
          type="checkbox"
          custom
          xs={12}
          className="dv_take_reason_list_12"
        >
          <FormCheck.Input type="checkbox" id="reason6" name="cash" />
          <FormCheck.Label className="custom-control-label" htmlFor="reason6">
            Beautician refused to serve
          </FormCheck.Label>
        </Col>
        <div className="dv_country_based_filter">
          <div className="dv_view_cart_visible">
            <div className="dv_areyousure_footer">
              <button
                type="button"
                onClick={close}
                className="btn btn-default dv_no_dontproceed_btn"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-default dv_yes_proceed_btn"
              >
                Yes Cancel
              </button>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

AreYouSure.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default AreYouSure;
