import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ImageText = () => {
  return (
    <div className="dv_left_img_txt">
      <Container>
        <Row>
          <Col lg={5} xs={12}>
            <img
              className="dv_left_side_panel_img"
              src="./images/safety-first.jpg"
              alt=""
            />
          </Col>
          <Col lg={7} xs={12}>
            <div className="dv_heading_of_panel">safety first</div>
            <p className="dv_paragraph_of_panel">
              we are very care about our services and your safety is our first
              <strong> priority </strong>
            </p>
            <p className="dv_paragraph_of_panel">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageText;
