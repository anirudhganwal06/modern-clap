import React from 'react';
import PropTypes from 'prop-types';
import { MoreVertical } from 'react-feather';

import avatar from '../../images/avatar.png';

const CustomersTable = ({ customers }) => {
  const customersJSX = customers.map((customer, index) => (
    <tr key={index}>
      <td>
        <img
          src={avatar}
          style={{ width: '30px', borderRadius: '50%' }}
          alt=""
        />
      </td>
      <td>sanjay sakpal </td>
      <td>san...@gmail.com </td>
      <td>0 56 875 7463 </td>
      <td>active </td>
      <td>
        <a
          className="dv_everytable_action dropdown-toggle"
          id="userDropdown"
          role="button"
          href="#!"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <MoreVertical width="24" />
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="userDropdown"
        >
          <a className="dropdown-item" href="#!">
            View
          </a>
          <a className="dropdown-item" href="#!">
            Delete
          </a>
        </div>
      </td>
    </tr>
  ));

  return (
    <table className="table" id="dataTable" width="100%" cellSpacing={0}>
      <thead>
        <tr>
          <th>avtar</th>
          <th>name </th>
          <th>email</th>
          <th>contact</th>
          <th>status</th>
          <th>action </th>
        </tr>
      </thead>
      <tbody>{customersJSX}</tbody>
    </table>
  );
};

CustomersTable.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomersTable;
