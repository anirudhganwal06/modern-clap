import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { ChevronLeft, ChevronRight } from 'react-feather';

import 'swiper/swiper-bundle.min.css';
import sliderNames from '../../config/services.json';

SwiperCore.use([Navigation]);

const RepeatSlider = props => {
  const sliderItemsJSX = sliderNames[props.heading].map((item, i) => {
    const img = item.replace('&', 'and');
    const title = item.split('.')[0].replace(/-/g, ' ');

    return (
      <SwiperSlide key={i}>
        <div className="item">
          <Link to={'/service-details/' + title}>
            <img
              className="owlsliderimg"
              src={`./images/sliders/${props.heading}/${img}`}
              alt={img}
            />
            <div className="dv_img_title">{title}</div>
          </Link>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="dv_repeat_slider_wrapper">
      <Container>
        <h3 className="dv_repeat_slider_heading">{props.heading}</h3>
        <p className="dv_repeat_slider_para">{props.desc}</p>
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: '.dv_sploffer_owl_next',
            prevEl: '.dv_sploffer_owl_prev'
          }}
          breakpoints={{
            320: {
              slidesPerView: 1
            },
            480: {
              slidesPerView: 1
            },
            600: {
              slidesPerView: 2
            },
            991: {
              slidesPerView: 3
            }
          }}
        >
          {sliderItemsJSX}
          <div className="owl-nav">
            <button
              slot="container-end"
              type="button"
              className="dv_sploffer_owl_prev"
            >
              <ChevronLeft />
            </button>
            <button
              slot="container-end"
              type="button"
              className="dv_sploffer_owl_next"
            >
              <ChevronRight />
            </button>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

RepeatSlider.propTypes = {
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default RepeatSlider;
