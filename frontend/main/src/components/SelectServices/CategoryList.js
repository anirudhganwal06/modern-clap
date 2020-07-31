import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import { ChevronRight } from 'react-feather';

const CategoryList = ({ title, categories, active, setActive }) => {
  const categoriesJSX = categories.map((category, index) => (
    <li
      key={index}
      className={classnames({ selected: active === index })}
      onClick={() => setActive(index)}
    >
      {category.icon}
      {category.name}
      {active === index ? <ChevronRight /> : ' '}
    </li>
  ));

  return (
    <Col lg={3} sm={12} className="dv_select_service_3 dv_padding_left_0">
      <h3>{title}</h3>
      <ul className="dv_services_ul_height">{categoriesJSX}</ul>
    </Col>
  );
};

CategoryList.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired
};

export default CategoryList;
