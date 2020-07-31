import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col, Alert, Form } from 'react-bootstrap';

import { ReactComponent as TickSVG } from '../../svgs/tick.svg';

const CategoryRequestForm = () => {
  return (
    <div className="dv_per_service_wrapper">
      <h4 className="view_request_title">
        Add Category Request Form
        <div className="float-right dv_setting_save_btn_wrapper">
          <button type="button" className="btn btn-sm text-dark">
            Cancel
          </button>
          <button type="button" className="btn btn-sm btn-primary">
            Save
          </button>
        </div>
      </h4>
      <Row className="p-3">
        <Col md={12}>
          <Alert variant="warning">
            <strong>Notice : </strong> If you want to add mutiple business in
            one account then add from here otherwise{' '}
            <Link to="#!">click here </Link> to register as a new business.
          </Alert>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>Owner Full Name</label>
            <Form.Control
              disabled
              type="text"
              className="dv_all_inputs"
              placeholder="Shyam Jadhav"
            />
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>
              Email Address
              <TickSVG
                style={{
                  width: '15px',
                  float: 'left',
                  margin: '3px 10px 0 0'
                }}
              />
            </label>
            <Form.Control
              disabled
              type="text"
              className="dv_all_inputs"
              placeholder="demo@gmail.com"
            />
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>
              Mobile No
              <TickSVG
                style={{
                  width: '15px',
                  float: 'left',
                  margin: '3px 10px 0 0'
                }}
              />
            </label>
            <Form.Control
              disabled
              type="text"
              className="dv_all_inputs"
              placeholder={9222266992}
            />
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>Phone No</label>
            <Form.Control
              disabled
              type="text"
              className="dv_all_inputs"
              placeholder={910456789}
            />
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>Select Country</label>
            <Form.Control
              disabled
              type="text"
              className="dv_all_inputs"
              placeholder="India"
            />
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>Category</label>
            <Form.Control
              disabled
              type="text"
              className="dv_all_inputs"
              placeholder="Cleaners"
            />
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>Shop Name </label>
            <Form.Control
              type="text"
              className="dv_all_inputs"
              placeholder="Enter Name"
            />
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>Contact Person </label>
            <Form.Control
              type="text"
              className="dv_all_inputs"
              placeholder="Enter Name"
            />
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>Contact Number </label>
            <Form.Control
              type="text"
              className="dv_all_inputs"
              placeholder="Enter Number"
            />
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>State </label>
            <Form.Control as="select" className="dv_all_inputs">
              <option>Dubai </option>
              <option>Abu Dhabi </option>
              <option>Sharjha </option>
              <option>Ras al Khaimah </option>
              <option>Fujairah</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>Address </label>
            <Form.Control
              type="text"
              className="dv_all_inputs"
              placeholder="Enter Address"
            />
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>PO Box</label>
            <Form.Control
              type="text"
              className="dv_all_inputs"
              placeholder="e g : 81748"
            />
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>Trade License (jpg, png, pdf) </label>
            <Form.File custom>
              <Form.File.Input />
              <Form.File.Label>Choose file</Form.File.Label>
            </Form.File>
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>Trade License No </label>
            <Form.Control
              type="text"
              className="dv_all_inputs"
              placeholder="Enter Number"
            />
          </Form.Group>
        </Col>
        <Col xs={12} lg={4}>
          <Form.Group>
            <label>Expiry Date </label>
            <Form.Control
              type="text"
              className="dv_all_inputs"
              placeholder="Enter Expiry Date"
            />
          </Form.Group>
        </Col>
        <Col xs={12} className="pb-3">
          <Form.Check custom>
            <Form.Check.Input id="customCheck" />
            <Form.Check.Label htmlFor="customCheck">
              I accepted merge business <strong>terms &amp; condition </strong>
            </Form.Check.Label>
          </Form.Check>
        </Col>
      </Row>
    </div>
  );
};

export default CategoryRequestForm;
