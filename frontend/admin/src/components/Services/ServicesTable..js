import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Table, Dropdown } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

import Search from '../common/Search';
import Pagination from '../common/Pagination';

const ServicesTable = ({ services }) => {
  return (
    <>
      <Search />
      <Table width="100%" cellSpacing={0} responsive>
        <thead>
          <tr>
            <th>Type </th>
            <th>category </th>
            <th>service </th>
            <th>active </th>
            <th>action </th>
          </tr>
          <tr>
            <th></th>
            <th>14</th>
            <th>54</th>
            <th>30</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.type}</td>
              <td>{service.category}</td>
              <td>{service.name}</td>
              <td>
                <div className="dv_status_in_list">
                  <label className="form-switch">
                    <input type="checkbox" defaultChecked={service.active} />
                    <i />
                  </label>
                </div>
              </td>
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

ServicesTable.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default ServicesTable;
