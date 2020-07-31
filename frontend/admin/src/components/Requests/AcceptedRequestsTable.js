import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Table, Dropdown } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

import Search from '../common/Search';
import Pagination from '../common/Pagination';

const AcceptedRequestsTable = ({ requests }) => {
  return (
    <>
      <Search />
      <Table responsive width="100%" cellSpacing={0}>
        <thead>
          <tr>
            <th>date </th>
            <th>Ref No </th>
            <th>customer </th>
            <th>booking </th>
            <th>pay. type </th>
            <th>pay. status </th>
            <th>amount </th>
            <th>action </th>
          </tr>
          <tr>
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th>AED 1245 </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.date}</td>
              <td>
                <Link to={'/request/' + request.id}>{request.id}</Link>
              </td>
              <td>{request.customer}</td>
              <td>
                <span className={request.bookingStatus}>
                  {request.bookingStatus}
                </span>
              </td>
              <td>
                <span>{request.paymentType}</span>
              </td>
              <td>
                <span className={request.paymentStatus}>
                  {request.paymentStatus}
                </span>
              </td>
              <td>AED {request.amount}</td>
              <Dropdown as="td">
                <Dropdown.Toggle as="a" className="dv_everytable_action">
                  <MoreVertical />
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                  <Dropdown.Item as={Link} to={'/request/' + request.id}>
                    View
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/inbox">
                    Chat
                  </Dropdown.Item>
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

AcceptedRequestsTable.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      customer: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      paymentStatus: PropTypes.string.isRequired,
      paymentType: PropTypes.string.isRequired,
      bookingStatus: PropTypes.string.isRequired
    })
  ).isRequired
};

export default AcceptedRequestsTable;
