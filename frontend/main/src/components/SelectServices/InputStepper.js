import React from 'react';
import PropTypes from 'prop-types';

import FormControl from 'react-bootstrap/FormControl';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Plus, Minus } from 'react-feather';

const InputStepper = ({ value, onChange }) => {
  return (
    <ButtonGroup size="lg">
      {value === 0 && <span className="dv_add_overlay">add</span>}
      <button
        type="button"
        className="btn btn-default dv_plus_minusbtn"
        onClick={() => onChange(value - 1)}
      >
        <Minus size={24} />
      </button>
      <FormControl type="text" className="dv_input_qty" value={value} readOnly />
      <button
        type="button"
        className="btn btn-default dv_plus_minusbtn"
        onClick={() => onChange(value + 1)}
      >
        <Plus size={24} />
      </button>
    </ButtonGroup>
  );
};

InputStepper.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputStepper;
