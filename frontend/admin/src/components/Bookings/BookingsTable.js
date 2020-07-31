import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Table, Dropdown } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

import Pagination from '../common/Pagination';

const BookingsTable = ({ bookings }) => {
  return (
    <>
      <Table width="100%" cellSpacing={0} responsive>
        <thead>
          <tr>
            <th>Ref No </th>
            <th>date </th>
            <th>customer </th>
            <th>booking </th>
            <th>pay. type </th>
            <th>pay. status </th>
            <th>amount </th>
            <th>commi. </th>
            <th>penalty </th>
            <th>action </th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>AED 1245 </th>
            <th>AED 124 </th>
            <th>AED 20 </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((service, index) => (
            <tr key={index}>
              <td>
                <a href="#!">MD12345</a>
              </td>
              <td>12/12/2020 </td>
              <td>sarika kadam </td>
              <td>
                <span style={{ textTransform: 'capitalize', color: 'green' }}>
                  completed{' '}
                </span>{' '}
              </td>
              <td>
                <span>cash </span>{' '}
              </td>
              <td>
                <span style={{ textTransform: 'capitalize', color: 'green' }}>
                  successful{' '}
                </span>{' '}
              </td>
              <td>AED 120 </td>
              <td>AED 13</td>
              <td>AED 10</td>
              <Dropdown as="td">
                <Dropdown.Toggle as="a" className="dv_everytable_action">
                  <MoreVertical />
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                  <Dropdown.Item as={Link} to={'/services/' + service.id}>
                    Edit
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

BookingsTable.propTypes = {
  bookings: PropTypes.array.isRequired
};

export default BookingsTable;
