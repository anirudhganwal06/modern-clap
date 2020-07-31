import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, FormGroup } from 'react-bootstrap';

const PersonalDetailsFormGroup = ({ isOpen, errors }) => {
  return (
    <FormGroup style={{ display: isOpen ? 'block' : 'none' }}>
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Owner Full Name"
        name="ownerName"
        isInvalid={errors.ownerName}
        required
      />
      <FormControl.Feedback type="invalid">
        {errors.ownerName}
      </FormControl.Feedback>
      <FormControl
        type="email"
        className="dv_careers_form_input"
        placeholder="Email Address"
        name="ownerEmail"
        isInvalid={errors.ownerEmail}
        required
      />
      <FormControl.Feedback type="invalid">
        {errors.ownerEmail}
      </FormControl.Feedback>
      <FormControl
        type="tel"
        className="dv_careers_form_input"
        placeholder="Mobile No"
        name="ownerMobile"
        isInvalid={errors.ownerMobile}
        required
      />
      <FormControl.Feedback type="invalid">
        {errors.ownerMobile}
      </FormControl.Feedback>
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Phone No"
        name="ownerPhone"
        isInvalid={errors.ownerPhone}
      />
      <FormControl.Feedback type="invalid">
        {errors.ownerPhone}
      </FormControl.Feedback>
      <FormControl
        as="select"
        className="dv_careers_form_input"
        name="country"
        isInvalid={errors.country}
        required
      >
        <option value="Select Country">Select Country</option>
        <option value="United arab emirates">United arab emirates</option>
        <option value="India">India</option>
        <option value="United States of America">
          United State of America
        </option>
      </FormControl>
      <FormControl.Feedback type="invalid">
        {errors.country}
      </FormControl.Feedback>
      <FormControl
        type="password"
        className="dv_careers_form_input"
        placeholder="Password"
        name="password"
        isInvalid={errors.password}
        required
      />
      <FormControl.Feedback type="invalid">
        {errors.password}
      </FormControl.Feedback>
      <FormControl
        type="password"
        className="dv_careers_form_input"
        placeholder="Retype Password"
        name="confirmPassword"
        isInvalid={errors.confirmPassword}
        required
      />
      <FormControl.Feedback type="invalid">
        {errors.confirmPassword}
      </FormControl.Feedback>
    </FormGroup>
  );
};

PersonalDetailsFormGroup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired
};

export default PersonalDetailsFormGroup;
