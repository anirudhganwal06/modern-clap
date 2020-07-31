import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { Link } from 'react-router-dom';
import { Table, Dropdown } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

import Search from '../common/Search';
import Pagination from '../common/Pagination';
import Loading from '../common/Loading';

const GET_REQUESTS = gql`
  query Requests {
    requests {
      _id
      customer {
        name
      }
      services {
        service {
          name
        }
      }
      location {
        area
      }
      payment {
        total
      }
      status
    }
  }
`;

const LatestBookingsTable = () => {
  const { loading, data } = useQuery(GET_REQUESTS);

  if (loading || !data) return <Loading />;

  return (
    <>
      <Search />
      <Table id="dataTable" width="100%" cellSpacing={0} responsive>
        <thead>
          <tr>
            <th>request no </th>
            <th>Customer </th>
            <th>Service</th>
            <th>Location</th>
            <th>Amount</th>
            <th>status</th>
            <th>action</th>
          </tr>
          <tr>
            <th>1542 </th>
            <th />
            <th />
            <th />
            <th>AED 12,024 </th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {data.requests.map((req, index) => (
            <tr key={index}>
              <td>{req._id}</td>
              <td>{req.customer.name}</td>
              <td>
                {req.services
                  .reduce((total, service) => total + ', ' + service.name, '')
                  .slice(2)}
              </td>
              <td>{req.location.area}</td>
              <td>{req.payment.total}</td>
              <td>
                <span className={req.status}>{req.status}</span>
              </td>
              <Dropdown as="td">
                <Dropdown.Toggle as="a" className="dv_everytable_action">
                  <MoreVertical />
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                  <Dropdown.Item as={Link} to={'/request/' + req._id}>
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

export default LatestBookingsTable;
