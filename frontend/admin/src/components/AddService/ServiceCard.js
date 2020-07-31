import React from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Col,
  FormControl,
  InputGroup,
  Button,
  FormGroup
} from 'react-bootstrap';
import { Edit2, Check } from 'react-feather';

const ServiceCard = ({ title }) => {
  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">
        {title}
        <div className="dv_status_in_list float-right">
          <label className="form-switch">
            <input type="checkbox" defaultChecked />
            <i />
          </label>
        </div>
      </h4>
      <Row className="p-3">
        <Col lg={4} xs={12}>
          <InputGroup className="mb-3">
            <label>Cut Price - AED</label>
            <FormControl
              type="text"
              className="dv_all_inputs"
              placeholder="Enter"
              defaultValue={160}
            />
            <InputGroup.Append>
              <Button style={{ height: '45px' }} type="submit">
                <Edit2 height={24} width={15} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col lg={4} xs={12}>
          <InputGroup className="mb-3">
            <label>Sale Price - AED </label>
            <FormControl
              type="text"
              className="dv_all_inputs"
              placeholder="Enter"
              defaultValue={120}
            />
            <InputGroup.Append>
              <Button style={{ height: '45px' }} type="submit">
                <Check height={24} width={15} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col lg={4} xs={12}>
          <FormGroup>
            <label>% OFF </label>
            <FormControl
              disabled
              type="text"
              className="dv_all_inputs"
              placeholder="%"
              defaultValue="23% OFF"
            />
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired
};

export default ServiceCard;
