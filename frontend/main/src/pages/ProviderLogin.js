import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import validator from 'validator';
import config from '../config';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import Header from '../components/common/Header';
import SectionHeading from '../components/common/SectionHeading';

const LOGIN_PROVIDER = gql`
  mutation LoginProvider($email: String!, $password: String!) {
    loginProvider(email: $email, password: $password) {
      _id
    }
  }
`;

const SellerLogin = () => {
  document.title = 'Provider Login | Modern clap';

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [sendLoginRequest, { data }] = useMutation(LOGIN_PROVIDER);

  const onInputChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const login = () => {
    const errors = {};
    if (!validator.isEmail(loginData.email)) {
      errors.email = 'Email is not valid';
    }
    if (!validator.isLength(loginData.password, {min: 8, max: 24})) {
      errors.password = 'Password length should be between 8 - 24'
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    sendLoginRequest({ variables: loginData });
  };

  if (data && data.loginProvider._id)
    window.location.href = config.PROVIDER_URL;

  return (
    <div className="dv_wrapper">
      <Header
        title="Best way to grow your business "
        desc="Register and Join with our more than 30,000 partners and give boost to business."
        headerClassName="dv_seller_registration_header"
      />
      <div className="dv_content">
        <div className="dv_seller_registration_wrapper">
          <div className="dv_seller_container">
            <ul className="dv_login_regi_provider">
              <li>
                <Link to="/provider/login" className="active">
                  Login{' '}
                </Link>
              </li>
              <li>
                <Link to="/provider/register">Register </Link>
              </li>
            </ul>
            <SectionHeading title="Login as a Provider" className="mb-3" />
            <FormControl
              type="email"
              className="dv_careers_form_input"
              placeholder="Email"
              name="email"
              value={loginData.email}
              onChange={onInputChange}
              isInvalid={errors.email}
            />
            <FormControl.Feedback type="invalid">
              {errors.email}
            </FormControl.Feedback>
            <FormControl
              type="password"
              className="dv_careers_form_input"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={onInputChange}
              isInvalid={errors.password}
            />
            <FormControl.Feedback type="invalid">
              {errors.password}
            </FormControl.Feedback>
          </div>
        </div>
      </div>
      <div className="dv_continue_next">
        <div className="dv_seller_container pb-2  pt-2">
          <Button className="btn-default dv_seller_submit_btn" onClick={login}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
