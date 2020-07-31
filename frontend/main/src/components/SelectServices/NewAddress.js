import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';

const NewAddress = () => {
  return (
    <>
      <span
        style={{
          display: 'block',
          padding: '10px 0',
          margin: '0 0 0 -12px'
        }}
      >
        Add New addres or search location
      </span>
      <Row>
        <Col lg={6} xs={12} className="dv_padding_left_0">
          <FormControl
            type="text"
            id="searchlocation"
            className="dv_use_current_location"
            placeholder="Search New Location"
          />
          <iframe
            className="dv_location_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.84785662167!2d54.94754379834026!3d25.075707331290918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1592160141041!5m2!1sen!2sae"
            title="map"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            frameBorder={0}
          />
        </Col>
        <Col lg={6} xs={12} className="dv_padding_right_0">
          {/*  <button type="button" class="btn btn-default dv_use_current_location">
                                <svg style="width: 20px; margin: 0 15px 0 0;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                Use Current Location
                            </button> */}
          <div className="dv_location_wrapper">
            <Row>
              <Col lg={6} xs={12}>
                <FormControl
                  type="text"
                  className="dv_all_location_feild_input dv_error_for_input"
                  placeholder="Flat No"
                  id="FlatNo"
                />
              </Col>
              <Col lg={6} xs={12}>
                <FormControl
                  type="text"
                  className="dv_all_location_feild_input"
                  placeholder="Building Name"
                  id="BuildingName"
                />
              </Col>
            </Row>
            <Row>
              <Col lg={6} xs={12}>
                <FormControl
                  type="text"
                  className="dv_all_location_feild_input"
                  placeholder="Residence area"
                  id="Residence"
                />
              </Col>
              <Col lg={6} xs={12}>
                <FormControl
                  type="text"
                  className="dv_all_location_feild_input"
                  placeholder="Near Landmark"
                  id="Nearlanmark"
                />
              </Col>
            </Row>
            <Row as="ul" className="dv_select_location_Address_type">
              <Col as={FormCheck} type="radio" custom xs={4}>
                <FormCheck.Input type="radio" id="Home" name="example1" />
                <FormCheck.Label htmlFor="Home">Home</FormCheck.Label>
              </Col>
              <Col as={FormCheck} type="radio" custom xs={4}>
                <FormCheck.Input type="radio" id="Office" name="example1" />
                <FormCheck.Label htmlFor="Office">Office</FormCheck.Label>
              </Col>
              <Col as={FormCheck} type="radio" custom xs={4}>
                <FormCheck.Input type="radio" id="Other" name="example1" />
                <FormCheck.Label htmlFor="Other">Other</FormCheck.Label>
              </Col>
            </Row>
            <Row className="dv_md_margin_0">
              <Col xs={12} className="dv_padding_right_0">
                <button
                  type="button"
                  className="btn btn-default dv_save_address_location"
                >
                  Save Address
                </button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default NewAddress;
