import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { MoreVertical } from 'react-feather';

const Booking = ({ active }) => {
  return (
    <div id="Bookings" className={classnames('tab-pane', { active })}>
      <div className="card-body p-0">
        <table className="table">
          <thead>
            <tr>
              <th>ref # </th>
              <th>service </th>
              <th>amount </th>
              <th>location </th>
              <th>status </th>
              <th>review </th>
              <th>action </th>
            </tr>
            <tr>
              <th />
              <th />
              <th>AED 12,000</th>
              <th />
              <th />
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#!">MD12345</a>
              </td>
              <td>manicure pedicure </td>
              <td>AED 970 </td>
              <td>Home 1 </td>
              <td>
                <span>completed </span>
              </td>
              <td>
                <span
                  style={{
                    color: '#04bf04',
                    textTransform: 'capitalize'
                  }}
                >
                  received
                </span>
              </td>
              <td>
                <a
                  className="dv_everytable_action dropdown-toggle"
                  id="userDropdown"
                  href="#!"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <MoreVertical width={24} />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="#!">
                    View Invoice{' '}
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Booking.propTypes = {
  active: PropTypes.bool.isRequired
};

export default Booking;
