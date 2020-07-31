import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { X } from 'react-feather';

const SideNav = ({ close }) => {
  const [openMenu, setOpenMenu] = useState('');

  return (
    <div id="layoutSidenav_nav">
      <nav className="sb-sidenav sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <Nav>
            <Nav.Link as={Link} to="/">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/notifications">
              Notification <span className="dv_pending_numbders">29</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/inbox">
              Inbox <span className="dv_pending_numbders">12</span>
            </Nav.Link>
            <Nav.Link
              className={classnames({
                collapsed: openMenu !== 'usersManagement'
              })}
              onClick={e => {
                e.preventDefault();
                setOpenMenu(
                  openMenu === 'usersManagement' ? '' : 'usersManagement'
                );
              }}
            >
              Users Management
              <div className="sb-sidenav-collapse-arrow">
                <FontAwesomeIcon icon="angle-down" />
              </div>
            </Nav.Link>
            <div
              id="usersManagement"
              className={classnames('toggle', {
                'toggle-open2': openMenu === 'usersManagement'
              })}
            >
              <Nav as="nav" className="sb-sidenav-menu-nested">
                <Nav.Link as={Link} to="/customers">
                  Customers<span className="dv_pending_numbders">5</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/providers">
                  Providers
                </Nav.Link>
              </Nav>
            </div>
            <Nav.Link
              className={classnames({
                collapsed: openMenu !== 'categoryManagement'
              })}
              onClick={e => {
                e.preventDefault();
                setOpenMenu(
                  openMenu === 'categoryManagement' ? '' : 'categoryManagement'
                );
              }}
            >
              Category Management
              <div className="sb-sidenav-collapse-arrow">
                <FontAwesomeIcon icon="angle-down" />
              </div>
            </Nav.Link>
            <div
              id="Request"
              className={classnames('toggle', {
                'toggle-open3': openMenu === 'categoryManagement'
              })}
            >
              <Nav as="nav" className="sb-sidenav-menu-nested">
                <Nav.Link as={Link} to="/types">
                  Type <span className="dv_pending_numbders">5</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/categories">
                  Category
                </Nav.Link>
                <Nav.Link as={Link} to="/services">
                  Services
                </Nav.Link>
              </Nav>
            </div>
            <Nav.Link as={Link} to="/bookings">
              All Bookings
            </Nav.Link>
            <Nav.Link as={Link} to="/revenue">
              Revenue
            </Nav.Link>
            <Nav.Link as={Link} to="/promo-codes">
              Promo Cards / Offers
            </Nav.Link>
            <Nav.Link as={Link} to="/reviews">
              Review &amp; Rating
            </Nav.Link>
            <X size={24} id="dv_close_mobile_menu" onClick={close} />
          </Nav>
        </div>
      </nav>
    </div>
  );
};

SideNav.propTypes = {
  close: PropTypes.func.isRequired
};

export default SideNav;
