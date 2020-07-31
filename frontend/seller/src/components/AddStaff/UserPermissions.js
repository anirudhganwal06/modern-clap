import React from 'react';
import PropTypes from 'prop-types';

import { FormCheck, Table, Row, Col, Alert } from 'react-bootstrap';
import decamelize from '../../utils/decamelize';

const UserPermissions = ({ onChange, ...props }) => {
  const onInputChange = (e, level) => {
    onChange({ [e.target.name]: e.target.checked ? level : level - 1 });
  };

  const permissionRowsJSX = Object.keys(props).map(permission => (
    <tr key={permission}>
      <td className="pl-4 text-capitalize">{decamelize(permission)}</td>
      <td>
        <FormCheck custom id={permission + '_1'}>
          <FormCheck.Input
            name={permission}
            checked={props[permission] >= 1}
            onChange={e => onInputChange(e, 1)}
          />
          <FormCheck.Label />
        </FormCheck>
      </td>
      <td>
        <FormCheck custom id={permission + '_2'}>
          <FormCheck.Input
            name={permission}
            checked={props[permission] >= 2}
            onChange={e => onInputChange(e, 2)}
          />
          <FormCheck.Label />
        </FormCheck>
      </td>
    </tr>
  ));

  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">User Permission</h4>
      <Row className="p-3">
        <Col md={12}>
          <Alert variant="warning" className="m-0">
            <strong>Note : </strong> Users can see business access pages in
            their account by read only and edit.
          </Alert>
        </Col>
      </Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <th className="pl-4">Page access </th>
              <th>view only </th>
              <th>Edit </th>
            </tr>
          </thead>
          <tbody>{permissionRowsJSX}</tbody>
        </Table>
      </Row>
    </div>
  );
};

UserPermissions.propTypes = {
  dashboard: PropTypes.number.isRequired,
  notification: PropTypes.number.isRequired,
  inbox: PropTypes.number.isRequired,
  requestList: PropTypes.number.isRequired,
  acceptedRequest: PropTypes.number.isRequired,
  service: PropTypes.number.isRequired,
  staff: PropTypes.number.isRequired,
  sale: PropTypes.number.isRequired,
  review: PropTypes.number.isRequired,
  setting: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default UserPermissions;
