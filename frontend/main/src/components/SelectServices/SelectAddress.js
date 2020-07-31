import React from 'react';

import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormCheck from 'react-bootstrap/FormCheck';
import Dropdown from 'react-bootstrap/Dropdown';
import { PencilSquare, TrashFill } from 'react-bootstrap-icons';
import { Edit3 } from 'react-feather';

const addresses = [
  {
    type: 'other',
    address:
      'm-02 buhaleeba plaza, al rigga road, near to al rigga station, dubai, UAE'
  },
  {
    type: 'home',
    address:
      'm-02 saraya plaza, al muraqabat road, near to al muraqabat metra, dubai, UAE'
  },
  {
    type: 'home',
    address:
      'm-02 buhaleeba plaza, al rigga road, near to al rigga station, dubai, UAE'
  }
];

const SelectAddress = () => {
  const addressesJSX = addresses.map((address, index) => (
    <React.Fragment key={index}>
      <Col
        as={FormCheck}
        type="radio"
        custom
        xs={12}
        className="dv_save_address_list"
      >
        <FormCheck.Input type="radio" id={'add' + index} name="address" />
        <FormCheck.Label htmlFor={'add' + index}>
          <span className="dv_address_type">{address.type}</span>
          {address.address}
        </FormCheck.Label>
        <Dropdown className="dv_about_provider_dropdown">
          <Dropdown.Toggle as={Edit3} size={24} />
          <Dropdown.Menu className="dv_about_provider_dropdown_menu">
            <Dropdown.Item as={Link} to="#">
              <PencilSquare
                size={20}
                style={{
                  color: '#2874f0',
                  float: 'left',
                  margin: '0 15px 0 0'
                }}
              />
              Edit
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="#">
              <TrashFill
                size={20}
                style={{
                  color: '#ff4a4a',
                  float: 'left',
                  margin: '0 15px 0 0'
                }}
              />
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      {index !== addresses.length - 1 && (
        <div className="dv_divider_in_booking_request" />
      )}
    </React.Fragment>
  ));

  return (
    <div className="dv_store_address">
      <span style={{ display: 'block', padding: '10px 0 0 0' }}>
        Select an address from previous addresses
      </span>
      <div className="dv_payment_selection">
        <Row style={{ width: '100%', margin: 0 }}>{addressesJSX}</Row>
      </div>
    </div>
  );
};

export default SelectAddress;
