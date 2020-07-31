import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

const FullBanner = () => {
  return (
    <div className="dv_middle_full_banner">
      <Container>
        <div className="dv_full_banner_wrapper">
          <Link to="#!">
            <img
              src="https://k.nooncdn.com/cms/pages/20200625/fe9f59a1f6da2be0610e358552c855df/en_slider-01.gif"
              align="title"
              alt=""
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FullBanner;
