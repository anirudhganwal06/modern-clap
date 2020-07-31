import React from 'react';
import PropTypes from 'prop-types';

import { Row, FormCheck, Table } from 'react-bootstrap';
import decamelize from '../../utils/decamelize';

const OtherBusinesses = ({ onChange, ...props }) => {
  const onInputChange = e => {
    onChange({ [e.target.name]: e.target.checked });
  };

  const businessRowsJSX = Object.keys(props).map(business => (
    <tr key={business}>
      <td className="pl-4 text-capitalize">{decamelize(business)}</td>
      <td>
        <FormCheck custom id={business}>
          <FormCheck.Input
            name={business}
            checked={props[business]}
            onChange={onInputChange}
          />
          <FormCheck.Label />
        </FormCheck>
      </td>
    </tr>
  ));

  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">Add to other business also</h4>
      <Row>
        <Table>
          <thead>
            <tr>
              <th className="pl-4">Page access </th>
              <th>also add to </th>
            </tr>
          </thead>
          <tbody>{businessRowsJSX}</tbody>
        </Table>
      </Row>
    </div>
  );
};

OtherBusinesses.propTypes = {
  cleaners: PropTypes.bool.isRequired,
  onlineFitness: PropTypes.bool.isRequired,
  ladiesSalon: PropTypes.bool.isRequired,
  gentsSalon: PropTypes.bool.isRequired,
  deepCleaning: PropTypes.bool.isRequired,
  handymen: PropTypes.bool.isRequired,
  acTechnician: PropTypes.bool.isRequired,
  painters: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default OtherBusinesses;
