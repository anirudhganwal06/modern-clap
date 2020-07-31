import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

const PromoCodesTable = ({ promoCodes }) => {
  return (
    <>
      <Table width="100%" cellSpacing={0} responsive>
        <thead>
          <tr role="row">
            <th>promo code </th>
            <th>discount </th>
            <th>booking count</th>
            <th>start </th>
            <th>End </th>
            <th>status </th>
            <th>action</th>
          </tr>
          <tr role="row">
            <th
              className="sorting"
              tabIndex="0"
              aria-controls="dataTable"
              rowSpan="1"
              colSpan="1"
              aria-label="23 : activate to sort column ascending"
            >
              23{' '}
            </th>
            <th
              className="sorting"
              tabIndex="0"
              aria-controls="dataTable"
              rowSpan="1"
              colSpan="1"
              aria-label=" : activate to sort column ascending"
            >
              {' '}
            </th>
            <th
              className="sorting"
              tabIndex="0"
              aria-controls="dataTable"
              rowSpan="1"
              colSpan="1"
              aria-label=" : activate to sort column ascending"
            >
              {' '}
            </th>
            <th
              className="sorting_desc"
              tabIndex="0"
              aria-controls="dataTable"
              rowSpan="1"
              colSpan="1"
              aria-label=" : activate to sort column ascending"
              aria-sort="descending"
            >
              {' '}
            </th>
            <th
              className="sorting"
              tabIndex="0"
              aria-controls="dataTable"
              rowSpan="1"
              colSpan="1"
              aria-label=" : activate to sort column ascending"
            >
              {' '}
            </th>
            <th
              className="sorting"
              tabIndex="0"
              aria-controls="dataTable"
              rowSpan="1"
              colSpan="1"
              aria-label=" : activate to sort column ascending"
            >
              {' '}
            </th>
            <th
              className="sorting"
              tabIndex="0"
              aria-controls="dataTable"
              rowSpan="1"
              style={{ width: '43px' }}
              aria-label=" : activate to sort column ascending"
            >
              {' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {promoCodes.map((promoCode, index) => (
            <tr key={index}>
              <td className="">EID2020 </td>
              <td className="">20% </td>
              <td className="sorting_1">12</td>
              <td>12/12/2020 </td>
              <td>11/01/2021 </td>
              <td>
                <span style={{ color: 'green', textTransform: 'capitalize' }}>
                  active{' '}
                </span>{' '}
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
                  <a
                    className="dropdown-item"
                    href="#!"
                    data-toggle="modal"
                    data-target="#addpromocode"
                  >
                    Edit{' '}
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

PromoCodesTable.propTypes = {
  promoCodes: PropTypes.array.isRequired
};

export default PromoCodesTable;
