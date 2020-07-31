import React from 'react';
import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';

import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { AlignRight, PlusCircle } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ReactComponent as LogoSVG } from '../../svgs/logo.svg';

const Header = ({ toggleSideNav }) => {
  const { data } = useQuery(gql`
    query NotificationCount {
      notifications {
        count
      }
    }
  `);

  return (
    <Navbar className="sb-topnav" variant="dark" bg="dark">
      <Navbar.Brand
        as="a"
        href="https://mirrorssalonandspa.com/html/mirrors/img/react/"
      >
        <LogoSVG className="dv_logo_svg" />
      </Navbar.Brand>
      <button
        className="btn btn-link btn-sm order-1 order-lg-0"
        id="sidebarToggle"
        onClick={toggleSideNav}
      >
        <AlignRight size={24} />
      </button>
      {/* Navbar */}
      <Nav as="ul" className="ml-auto mr-md-0">
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/notifications">
            {data && data.notifications.count && (
              <>
                <FontAwesomeIcon icon="bell" fixedWidth />
                <span className="notification-dot">12</span>
              </>
            )}
          </Nav.Link>
        </Nav.Item>
        <Dropdown as="li">
          <Dropdown.Toggle as={Nav.Link} title="Add New">
            <PlusCircle size={24} />{' '}
          </Dropdown.Toggle>
          <Dropdown.Menu alignRight>
            <Dropdown.Item as={Link} to="#">
              Add Parent Business
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/service/add">
              Add New Service
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/staff/add">
              Add New Staff
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/requests">
              View Request - <span>05 </span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as="li">
          <Dropdown.Toggle as={Nav.Link}>
            <FontAwesomeIcon icon="user" fixedWidth />
            <span className="hide-mobile-767">Account </span>
          </Dropdown.Toggle>
          <Dropdown.Menu alignRight>
            <Dropdown.Item as={Link} to="#">
              Profile
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/reset-password">
              Change Password
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/settings">
              Settings
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#">
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

Header.propTypes = {
  toggleSideNav: PropTypes.func.isRequired
};

export default Header;
