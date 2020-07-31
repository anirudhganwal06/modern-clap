import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FormControl, FormGroup, FormFile } from 'react-bootstrap';

const AccountVerificationFormGroup = ({ isOpen, errors }) => {
  const [selectedFileName, setSelectedFile] = useState('Attach Trade License');

  return (
    <FormGroup style={{ display: isOpen ? 'block' : 'none' }}>
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Trade License No"
        name="tradeLicenseNo"
        isInvalid={errors.tradeLicenseNo}
        required
      ></FormControl>
      <FormControl.Feedback type="invalid">{errors.tradeLicenseNo}</FormControl.Feedback>
      <FormControl
        type="date"
        className="dv_careers_form_input"
        title="Expiry Date"
        name="tradeLicenseDate"
        isInvalid={errors.tradeLicenseDate}
        required
      ></FormControl>
      <FormControl.Feedback type="invalid">{errors.tradeLicenseDate}</FormControl.Feedback>
      <FormFile custom style={{ height: 'auto' }}>
        <FormFile.Input
          type="file"
          className="form-control dv_careers_form_input"
          name="tradeLicenseDoc"
          required
          onChange={e => setSelectedFile(e.target.files[0].name)}
        />
        <FormFile.Label className="dv_attach_resume" htmlFor="customFile">
          {selectedFileName}
        </FormFile.Label>
      </FormFile>
    </FormGroup>
  );
};

AccountVerificationFormGroup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired
};

export default AccountVerificationFormGroup;
