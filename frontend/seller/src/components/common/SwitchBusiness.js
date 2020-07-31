import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const SwitchBusiness = ({ title, options }) => {
  const optionsJSX = options.map(option => (
    <option key={option}>{option}</option>
  ));

  return (
    <div className="dv_switch_to_another_business">
      {title}
      <FormControl as="select" className="dv_all_inputs">
        {optionsJSX}
      </FormControl>
    </div>
  );
};

SwitchBusiness.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default SwitchBusiness;
