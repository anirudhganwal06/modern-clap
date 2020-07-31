import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Address = ({ addresses, active }) => {
  const addressesJSX = addresses.map((address, index) => (
    <tr key={index}>
      <td>Home </td>
      <td>971 56 848 7654 </td>
      <td>M-01 Buhaleeba plaza, al rigga, dubai PO: 81748 UAE </td>
      <td>Dubai </td>
      <td>al rigga </td>
      <td>81748 </td>
      <td>
        <a href="#!">view </a>{' '}
      </td>
    </tr>
  ));

  return (
    <div id="Address" className={classnames('tab-pane', { active })}>
      <div className="card-body p-0">
        <table className="table">
          <thead>
            <tr>
              <th>address type </th>
              <th>Phone </th>
              <th>Address </th>
              <th>city </th>
              <th>area </th>
              <th>pincode </th>
              <th>location </th>
            </tr>
          </thead>
          <tbody>{addressesJSX}</tbody>
        </table>
      </div>
    </div>
  );
};

Address.propTypes = {
  addresses: PropTypes.array.isRequired,
  active: PropTypes.bool.isRequired
};

export default Address;
