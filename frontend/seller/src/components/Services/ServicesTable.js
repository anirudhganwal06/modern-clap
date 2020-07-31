import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Link } from 'react-router-dom';
import { Table, Dropdown } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

import Search from '../common/Search';
import Loading from '../common/Loading';

const GET_SERVICES = gql`
  query Services($id: ID!) {
    provider(id: $id) {
      businessCategories {
        name
        type {
          name
        }
        services {
          _id
          name
        }
      }
      services {
        serviceId
        active
        salePrice
      }
    }
  }
`;

const ServicesTable = () => {
  const { loading, error, data } = useQuery(GET_SERVICES, {
    variables: {
      id: '5f198e857ae7adef1dc89c86'
    }
  });

  if (loading) return <Loading />;
  if (error) return 'An error occured!';

  let services = [];
  for (let category of data.provider.businessCategories) {
    for (let service of category.services) {
      services.push({
        id: service._id,
        name: service.name,
        category: category.name,
        type: category.type.name
      });
    }
  }
  services = services.map(service => ({
    ...service,
    ...data.provider.services.find(s => s.serviceiId === service._id)
  }));

  return (
    <>
      <Search noLimit />
      <Table width="100%" cellSpacing={0} responsive>
        <thead>
          <tr>
            <th>Type </th>
            <th>category </th>
            <th>service </th>
            <th>active </th>
            <th>amount </th>
            <th>action </th>
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
              <td>AED {service.price || 10}</td>
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
    </>
  );
};

export default ServicesTable;
