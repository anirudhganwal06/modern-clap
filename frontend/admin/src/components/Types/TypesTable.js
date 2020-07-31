import React from 'react';
import PropTypes from 'prop-types';
import { MoreVertical } from 'react-feather';

import { ReactComponent as AvatarSVG } from '../../svgs/avatar.svg';

const TypesTable = ({ types }) => {
  const typesJSX = types.map((type, index) => (
    <tr key={index}>
      <td>
        <AvatarSVG />
      </td>
      <td>cleaners </td>
      <td>
        <a href="#!">12 </a>{' '}
      </td>
      <td>
        <a href="#!">34 </a>{' '}
      </td>
      <td>
        <div className="dv_status_in_list">
          <label className="form-switch">
            <input type="checkbox" checked="" />
            <i></i>
          </label>
        </div>
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
          <MoreVertical width="24" />
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="userDropdown"
        >
          <a className="dropdown-item" href="#!">
            Edit{' '}
          </a>
        </div>
      </td>
    </tr>
  ));

  return (
    <table className="table" id="dataTable" width="100%" cellSpacing={0}>
      <thead>
        <tr>
          <th>img </th>
          <th>Types </th>
          <th>Category </th>
          <th>Services </th>
          <th>status </th>
          <th>active </th>
        </tr>
      </thead>
      <tr>
        <th></th>
        <th>14</th>
        <th>54</th>
        <th>30</th>
        <th></th>
        <th></th>
      </tr>
      <tbody>{typesJSX}</tbody>
    </table>
  );
};

TypesTable.propTypes = {
  types: PropTypes.array.isRequired
};

export default TypesTable;
