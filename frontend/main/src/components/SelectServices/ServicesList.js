import React from 'react';

import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import InputStepper from './InputStepper';

const services = [
  {
    name: 'African braids service 1',
    actualPrice: 'AED 120',
    discountedPrice: 'AED 90',
    servicePoints: [
      'OPI products',
      'Disposable products used',
      'safety is priority'
    ],
    link: '/service/medicure'
  },
  {
    name: 'African braids service',
    actualPrice: 'AED 120',
    discountedPrice: 'AED 90',
    link: '/service/medicure'
  },
  {
    name: 'African braids service',
    actualPrice: 'AED 120',
    discountedPrice: 'AED 90',
    link: '/service/medicure'
  },
  {
    name: 'African braids service',
    actualPrice: 'AED 120',
    discountedPrice: 'AED 90',
    link: '/service/medicure'
  },
  {
    name: 'African braids service',
    actualPrice: 'AED 120',
    discountedPrice: 'AED 90',
    link: '/service/medicure'
  },
  {
    name: 'African braids service',
    actualPrice: 'AED 120',
    discountedPrice: 'AED 90',
    link: '/service/medicure'
  },
  {
    name: 'African braids service',
    actualPrice: 'AED 120',
    discountedPrice: 'AED 90',
    link: '/service/medicure'
  }
];

const ServicesList = () => {
  const servicesJSX = services.map((service, index) => (
    <li key={index}>
      <div className="dv_service_prices_add_minus_btn_wrapper">
        <div className="dv_service_prices_wrapper">
          <span className="dv_service_name">{service.name}</span>
        </div>
        <div className="dv_plus_minus_wrapper">
          <ul className="dv_prices_cut_main">
            <li>{service.actualPrice}</li> <li>{service.discountedPrice}</li>
          </ul>
          <InputStepper value={index} onChange={() => {}} />
        </div>
        {service.servicePoints && (
          <div className="dv_service_points">
            <ul>
              {service.servicePoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
              <li>
                <Link to={service.link} className="read_more">
                  read more
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </li>
  ));

  return (
    <Col lg={6} sm={12} className="dv_select_service_3 p-0">
      <h3>services </h3>
      <ul className="dv_select_service_ul dv_last_service_border">
        {servicesJSX}
      </ul>
    </Col>
  );
};

export default ServicesList;
