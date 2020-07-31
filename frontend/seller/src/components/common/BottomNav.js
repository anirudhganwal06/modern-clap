import React from 'react';
import PropTypes from 'prop-types';

import { FileText, ArrowDown, BarChart, UserCheck, Menu } from 'react-feather';
import { Link } from 'react-router-dom';

const BottomNav = ({ toggleMenu }) => {
  return (
    <div className="show-mobile-991 dv_fixed_bottom_bar">
      <ul>
        <li>
          <Link to="/requests">
            <FileText size={24} />
            Request
            <div className="dv_circle_notify">
              <div className="circle" style={{ animationDelay: '0s' }} />
              <div className="circle" style={{ animationDelay: '1s' }} />
              <div className="circle" style={{ animationDelay: '2s' }} />
              <div className="circle" style={{ animationDelay: '3s' }} />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/accepted-requests">
            <ArrowDown size={24} />
            Accepted
          </Link>
        </li>
        <li>
          <Link to="/sale">
            <BarChart size={24} />
            Sale
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <UserCheck size={24} />
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="#"
            id="mobilemenu"
            onClick={e => {
              e.preventDefault();
              toggleMenu();
            }}
          >
            <Menu size={24} />
            Menu
          </Link>
        </li>
      </ul>
    </div>
  );
};

BottomNav.propTypes = {
  toggleMenu: PropTypes.func.isRequired
};

export default BottomNav;
