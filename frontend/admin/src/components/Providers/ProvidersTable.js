import React from 'react';
import PropTypes from 'prop-types';
import { MoreVertical } from 'react-feather';

import avatar from '../../images/avatar.png';
import { ReactComponent as TickSVG } from '../../svgs/tick.svg';

const ProvidersTable = ({ providers }) => {
  const providersJSX = providers.map((provider, index) => (
    <tr key={index}>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            name="example1"
          />
          <label className="custom-control-label" htmlFor="customCheck1" />
        </div>
      </td>
      <td>
        <img
          src={avatar}
          style={{ opacity: '.3', width: '30px', borderRadius: '50%' }}
          alt=""
        />
      </td>
      <td>lightspeed general</td>
      <td>
        <TickSVG
          style={{
            fill: '#007bff',
            width: '10px',
            height: '10px',
            margin: '0 5px 0 0'
          }}
        />
        contact@lightspeedme.com
      </td>
      <td>
        <span style={{ color: 'red', fontFamily: 'Segoe ui bold' }}>
          AED 320{' '}
        </span>
      </td>
      <td>
        <span
          style={{
            color: '#04bf04',
            textTransform: 'capitalize',
            fontFamily: 'Segoe ui bold'
          }}
        >
          Active{' '}
        </span>
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
          <a className="dropdown-item" href="/provider/asdf">
            View{' '}
          </a>
          <a
            className="dropdown-item"
            href="#!"
            data-toggle="modal"
            data-target="#addbalance"
          >
            Clear Due amount{' '}
          </a>
          <a
            className="dropdown-item"
            href="#!"
            data-toggle="modal"
            data-target="#addpenalty"
          >
            Add Penalty{' '}
          </a>
        </div>
      </td>
    </tr>
  ));

  return (
    <table className="table" width="100%" cellSpacing={0}>
      <thead>
        <tr>
          <th>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck"
                name="example1"
              />
              <label className="custom-control-label" htmlFor="customCheck" />
            </div>
          </th>
          <th>avtar</th>
          <th>name</th>
          <th>email</th>
          <th>due amount</th>
          <th>status</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>{providersJSX}</tbody>
    </table>
  );
};

ProvidersTable.propTypes = {
  providers: PropTypes.array.isRequired
};

export default ProvidersTable;
