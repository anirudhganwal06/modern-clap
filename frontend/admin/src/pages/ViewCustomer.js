import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import Address from '../components/ViewCustomer/Address';
import Profile from '../components/ViewCustomer/Profile';
import Booking from '../components/ViewCustomer/Booking';

const ViewCustomer = () => {
  const [activePane, setActivePane] = useState('profile');

  return (
    <div className="container-fluid">
      <h1 className="mt-4 dv_page_heading">Customer Details</h1>
      <div className="card mb-4">
        <div className="card-header">
          Customer Overall performance
          <Link
            to="/services"
            style={{
              background: '#007bff',
              color: '#ffffff',
              textTransform: 'uppercase',
              padding: '5px',
              fontSize: '12px',
              borderRadius: '5px',
              float: 'right',
              position: 'absolute',
              right: '10px',
              top: '10px'
            }}
          >
            View all
          </Link>
        </div>
        <div className="card-body p-0">
          <div className="dv_customer_details">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <span
                  className={classnames('nav-link cursor-pointer', {
                    active: activePane === 'profile'
                  })}
                  onClick={() => setActivePane('profile')}
                >
                  Basic Profile
                </span>
              </li>
              <li className="nav-item">
                <span
                  className={classnames('nav-link cursor-pointer', {
                    active: activePane === 'address'
                  })}
                  onClick={() => setActivePane('address')}
                >
                  Address
                </span>
              </li>
              <li className="nav-item">
                <span
                  className={classnames('nav-link cursor-pointer', {
                    active: activePane === 'booking'
                  })}
                  onClick={() => setActivePane('booking')}
                >
                  Booking
                </span>
              </li>
            </ul>
            <div className="tab-content">
              <Profile active={activePane === 'profile'} />
              <Address
                active={activePane === 'address'}
                addresses={[1, 2, 3, 4]}
              />
              <Booking active={activePane === 'booking'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCustomer;
