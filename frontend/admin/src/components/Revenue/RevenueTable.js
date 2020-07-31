import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'react-bootstrap';

import Pagination from '../common/Pagination';

const RevenueTable = ({ revenueList }) => {
  return (
    <>
      <Table width="100%" cellSpacing={0} responsive>
        <thead>
          <tr>
            <th>created on </th>
            <th>Ref No </th>
            <th>provider </th>
            <th>total amount </th>
            <th>revenue </th>
            <th>provider revenue </th>
            <th>payment type </th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>AED 35,700 </th>
            <th>
              <span style={{ color: 'green' }}>AED 1200</span>
            </th>
            <th>AED 34,500 </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {revenueList.map((revenue, index) => (
            <tr key={index}>
              <td>12/12/2020 </td>
              <td>
                <a href="#!">MD12345 </a>
              </td>
              <td>
                <a href="#!">goodhand </a>
              </td>
              <td>AED 100</td>
              <td>AED 20</td>
              <td>AED 80 </td>
              <td>Cash </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination />
    </>
  );
};

RevenueTable.propTypes = {
  revenueList: PropTypes.array.isRequired
};

export default RevenueTable;
