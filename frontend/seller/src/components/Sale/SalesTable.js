import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Table, Dropdown } from 'react-bootstrap';

import Search from '../common/Search';
import Pagination from '../common/Pagination';
import { MoreVertical } from 'react-feather';

const SalesTable = ({ orders }) => {
  return (
    <>
      <Search />
      <Table className="table" width="100%" cellSpacing={0} responsive>
        <thead>
          <tr>
            <th>created on </th>
            <th>Ref No </th>
            <th>customer </th>
            <th>total amount </th>
            <th>revenue </th>
            <th>md revenue </th>
            <th>penalty </th>
            <th>payment type </th>
            <th>action </th>
          </tr>
          <tr>
            <th />
            <th />
            <th />
            <th>AED 35,700 </th>
            <th>
              <span style={{ color: 'green' }}>AED 34,500</span>
            </th>
            <th>AED 1200 </th>
            <th>AED 120 </th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.createdOn}</td>
              <td>
                <Link to={'/request/' + order.id}>{order.id}</Link>
              </td>
              <td>{order.customer}</td>
              <td>AED {order.totalAmount}</td>
              <td>AED {order.revenue}</td>
              <td>AED {order.mdRevenue}</td>
              <td>AED {order.penalty}</td>
              <td>{order.paymentType}</td>
              <Dropdown as="td">
                <Dropdown.Toggle as="a" className="dv_everytable_action">
                  <MoreVertical size={24} />
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                  <Link to={'/request/' + order.id}>View</Link>
                </Dropdown.Menu>
              </Dropdown>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination />
    </>
  );
};

SalesTable.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      customer: PropTypes.shape.isRequired,
      createdOn: PropTypes.string.isRequired,
      totalAmount: PropTypes.number.isRequired,
      revenue: PropTypes.number.isRequired,
      mdRevenue: PropTypes.number.isRequired,
      penalty: PropTypes.number.isRequired,
      paymentType: PropTypes.string.isRequired
    })
  )
};

export default SalesTable;
