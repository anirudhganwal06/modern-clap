import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { gql, useQuery, useMutation } from '@apollo/client';

import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import Button from 'react-bootstrap/Button';
import { X, LogOut } from 'react-feather';

import { ReactComponent as Provider } from '../../svgs/provider.svg';
import { ReactComponent as AboutUs } from '../../svgs/about-us.svg';
import { ReactComponent as TnC } from '../../svgs/tnc.svg';
import { ReactComponent as PrivacyPolicy } from '../../svgs/privacy.svg';
import { ReactComponent as Blogs } from '../../svgs/blogs.svg';
import { ReactComponent as Reviews } from '../../svgs/reviews.svg';
import { ReactComponent as Careers } from '../../svgs/careers.svg';
import { ReactComponent as ContactUs } from '../../svgs/contact-us.svg';

import LoggedInMenuItems from './LoggedInMenuItems';
import LoggedOutMenuItems from './LoggedOutMenuItems';
import { setLoggedIn } from '../../app/cache';

const IS_LOGGED_IN = gql`
  query {
    isLoggedIn @client
  }
`;

const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

const Menu = ({ open, showMenu }) => {
  const { data: {isLoggedIn} } = useQuery(IS_LOGGED_IN);
  const [logout] = useMutation(LOGOUT);

  return (
    <Modal className="right" show={open} onHide={() => showMenu(false)}>
      <ModalHeader className="dv_login_modal_header">
        <ModalTitle className="dv_login_modal_header_h4">
          Account
          <X
            style={{ float: 'right', cursor: 'pointer' }}
            size={24}
            onClick={() => showMenu(false)}
          />
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        {isLoggedIn ? <LoggedInMenuItems /> : <LoggedOutMenuItems />}
        <ul className="dv_menu_links_a">
          <li>
            <Link to="/provider/login">
              <Provider />
              Become Provider
            </Link>
          </li>
          <li>
            <Link to="/about-us">
              <AboutUs />
              About us
            </Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">
              <TnC />
              terms &amp; condition
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy">
              <PrivacyPolicy />
              privacy policy
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              <Blogs />
              blog
            </Link>
          </li>
          <li>
            <Link to="/reviews">
              <Reviews />
              reviews
            </Link>
          </li>
          <li>
            <Link to="/careers">
              <Careers />
              careers
            </Link>
          </li>
          <li>
            <Link to="/contact-us">
              <ContactUs />
              contact us
            </Link>
          </li>
        </ul>
        <Button
          className={classnames('btn-default dv_logout_btn', {
            'd-none': !isLoggedIn
          })}
          onClick={() => {
            logout();
            setLoggedIn(false);
          }}
        >
          Logout
          <LogOut width={15} style={{ margin: '0 0 0 7px' }} />
        </Button>
      </ModalBody>
    </Modal>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  showMenu: PropTypes.func.isRequired
};

export default Menu;
