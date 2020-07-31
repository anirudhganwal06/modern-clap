import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Link } from 'react-router-dom';
import { Table, Dropdown } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

import Search from '../common/Search';
import Pagination from '../common/Pagination';

const AcceptedRequestsTable = ({
  requests,
  total,
  limit,
  setLimit,
  page,
  setPage
}) => {
  return (
    <>
      <Search limit={limit} setLimit={setLimit} />
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
              <td>{moment(request.time).format('DD/MM/YYYY')}</td>
              <td>
                <Link to={'/request/' + request._id}>{request._id}</Link>
              </td>
              <td>{request.customer.name}</td>
              <td>
                <span className={request.status}>{request.status}</span>
              </td>
              <td>
                <span>{request.payment.mode}</span>
              </td>
              <td>
                <span className={request.payment.status}>
                  {request.payment.status}
                </span>
              </td>
              <td>AED {request.payment.total}</td>
              <Dropdown as="td">
                <Dropdown.Toggle as="a" className="dv_everytable_action">
                  <MoreVertical />
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                  <Dropdown.Item as={Link} to={'/request/' + request._id}>
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
      <Pagination total={total} page={page} limit={limit} setPage={setPage} />
    </>
  );
};

AcceptedRequestsTable.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      customer: PropTypes.object.isRequired,
      payment: PropTypes.object.isRequired,
      status: PropTypes.string.isRequired
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  setLimit: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
};

export default AcceptedRequestsTable;
