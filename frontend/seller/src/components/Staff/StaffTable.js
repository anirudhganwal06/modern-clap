import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Table, Dropdown } from 'react-bootstrap';
import { Star, MoreVertical } from 'react-feather';

import Search from '../common/Search';
import Pagination from '../common/Pagination';

const StaffTable = ({ staffs }) => {
  return (
    <>
      <Search />
      <Table width="100%" cellSpacing={0} responsive>
        <thead>
          <tr>
            <th>staff name </th>
            <th>profession </th>
            <th>rating </th>
            <th>status </th>
            <th>action </th>
          </tr>
        </thead>
        <tbody>
          {staffs.map((staff, index) => (
            <tr key={index}>
              <td>{staff.name}</td>
              <td>{staff.profession}</td>
              <td>
                <Star size={15} fill="gold" strokeWidth={0} /> {staff.rating}
              </td>
              <td>
                <div className="dv_status_in_list">
                  <label className="form-switch">
                    <input type="checkbox" defaultChecked={staff.active} />
                    <i />
                  </label>
                </div>
              </td>
              <Dropdown as="td">
                <Dropdown.Toggle as="a" className="dv_everytable_action">
                  <MoreVertical />
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                  <Dropdown.Item as={Link} to={'/staff/' + staff.id}>
                    View
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

StaffTable.propTypes = {
  staffs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      active: PropTypes.bool.isRequired
    })
  )
};

export default StaffTable;
