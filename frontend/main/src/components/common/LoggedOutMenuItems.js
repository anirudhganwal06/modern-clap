import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { gql, useMutation } from '@apollo/client';

import { Button, Form, InputGroup } from 'react-bootstrap';
import { setLoggedIn, currentUser } from '../../app/cache';

const SEND_OTP = gql`
  mutation SendOTP($mobile: String!) {
    sendOTP(mobile: $mobile)
  }
`;

const VERIFY_OTP = gql`
  mutation VerifyOTP($mobile: String!, $otp: String!) {
    loginCustomer(mobile: $mobile, otp: $otp) {
      _id
      name
    }
  }
`;

let mobile = '';
let otpSent = false;

const LoggedOutMenuItems = () => {
  const [validMobile, setValidMobile] = useState(false);
  const [validOTP, setValidOTP] = useState(false);

  const countryCodeRef = useRef(null);
  const mobileRef = useRef(null);
  const otpRef = useRef(null);

  const [sendOTP, sendOTPData] = useMutation(SEND_OTP);
  const [verifyOTP, verifyOTPData] = useMutation(VERIFY_OTP);

  const onSendOTP = event => {
    event.preventDefault();
    if (event.target.checkValidity()) {
      mobile = countryCodeRef.current.value + mobileRef.current.value;
      sendOTP({ variables: { mobile: mobile } });
    }
  };

  const onVerifyOTP = event => {
    event.preventDefault();
    if (event.target.checkValidity() && otpSent)
      verifyOTP({ variables: { mobile: mobile, otp: otpRef.current.value } });
  };

  if (sendOTPData.data && sendOTPData.data.sendOTP === 'Message sent')
    otpSent = true;

  if (verifyOTPData.data && verifyOTPData.data.loginCustomer) {
    setLoggedIn(true);
    currentUser(verifyOTPData.data.loginCustomer);
  }

  return (
    <>
      <div className="dv_login_wrapper">
        <Form onSubmit={onSendOTP} noValidate>
          <InputGroup>
            <InputGroup.Prepend>
              <Form.Control
                as="select"
                className="dv_select_phone_number"
                ref={countryCodeRef}
              >
                <option value="+971">+971 </option>
                <option value="+91">+91 </option>
                <option value="+1">+1 </option>
              </Form.Control>
            </InputGroup.Prepend>
            <Form.Control
              type="tel"
              pattern="[0-9]{10}"
              className="dv_subscribe_us_input"
              placeholder="Mobile No"
              required
              isValid={validMobile}
              onChange={event => setValidMobile(event.target.checkValidity())}
              ref={mobileRef}
            />
          </InputGroup>
          <Button
            className="btn-default dv_login_btn"
            type="submit"
            disabled={!validMobile}
          >
            Get OTP
          </Button>
        </Form>
      </div>
      <div
        className={classnames('dv_login_otp_wrapper', { 'd-none': !otpSent })}
      >
        <Form onSubmit={onVerifyOTP} noValidate>
          <span className="dv_add_otp_txt">Add OTP to Login </span>
          <Form.Control
            type="text"
            pattern="[0-9]{6}"
            className="dv_subscribe_us_input"
            placeholder="OTP"
            isValid={validOTP}
            onChange={event => setValidOTP(event.target.checkValidity())}
            ref={otpRef}
          />
          <Button
            className="btn-default dv_login_btn"
            type="submit"
            disabled={!validOTP}
          >
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default LoggedOutMenuItems;
