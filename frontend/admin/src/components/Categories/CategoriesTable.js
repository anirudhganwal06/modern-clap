import React from 'react';
import PropTypes from 'prop-types';
import { MoreVertical } from 'react-feather';

import { ReactComponent as AvatarSVG } from '../../svgs/avatar.svg';

const CategoriesTable = ({ categories }) => {
  const categoriesJSX = categories.map((category, index) => (
    <tr key={index}>
      <td>
        <AvatarSVG />
      </td>
      <td>salon at home </td>
      <td>14 </td>
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
          <th>category </th>
          <th>service </th>
          <th>active </th>
          <th>action </th>
        </tr>
      </thead>
      <tr>
        <th></th>
        <th>14</th>
        <th>54</th>
        <th>30</th>
        <th></th>
      </tr>
      <tbody>{categoriesJSX}</tbody>
    </table>
  );
};

CategoriesTable.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategoriesTable;
