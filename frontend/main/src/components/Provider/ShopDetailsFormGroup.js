import React from 'react';
import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';

import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';

const CATEROGIES = gql`
  query GetCategories {
    categories {
      _id
      name
    }
  }
`;

const ShopDetailsFormGroup = ({ isOpen, errors }) => {
  const { loading, data } = useQuery(CATEROGIES);

  return (
    <FormGroup style={{ display: isOpen ? 'block' : 'none' }}>
      <FormControl
        as="select"
        className="dv_careers_form_input"
        name="businessCategory"
        defaultValue="null"
        isInvalid={errors.businessCategory}
        required
      >
        <option value="null" hidden disabled>
          Business Category
        </option>
        {!loading &&
          data &&
          data.categories.map((category, index) => (
            <option key={index} value={category._id}>
              {category.name}
            </option>
          ))}
      </FormControl>
      <FormControl.Feedback type="invalid">
        {errors.businessCategory}
      </FormControl.Feedback>
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Shop Name"
        name="shopName"
        isInvalid={errors.shopName}
        required
      />
      <FormControl.Feedback type="invalid">
        {errors.shopName}
      </FormControl.Feedback>
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Contact Person (optional)"
        name="contactPersonName"
        isInvalid={errors.contactPersonName}
      />
      <FormControl.Feedback type="invalid">
        {errors.contactPersonName}
      </FormControl.Feedback>
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Contact No (optional)"
        name="contactPersonMobile"
        isInvalid={errors.contactPersonMobile}
      />
      <FormControl.Feedback type="invalid">
        {errors.contactPersonMobile}
      </FormControl.Feedback>
      <FormControl
        as="select"
        className="dv_careers_form_input"
        name="city"
        isInvalid={errors.city}
        required
      >
        <option value="emirates">Emirates </option>
        <option value="dubai">Dubai </option>
        {/* <option disabled="">Sharjha </option>
          <option disabled="">Abu Dhabi </option>
          <option disabled="">Ras al khaim </option>
        <option disabled="">Al ain </option> */}
      </FormControl>
      <FormControl.Feedback type="invalid">
        {errors.city}
      </FormControl.Feedback>
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Address"
        name="address"
        isInvalid={errors.address}
        required
      />
      <FormControl.Feedback type="invalid">
        {errors.address}
      </FormControl.Feedback>
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="Area"
        name="area"
        isInvalid={errors.area}
        required
      />
      <FormControl.Feedback type="invalid">
        {errors.area}
      </FormControl.Feedback>
      <FormControl
        type="text"
        className="dv_careers_form_input"
        placeholder="P.O Box "
        name="pincode"
        isInvalid={errors.pincode}
        required
      />
      <FormControl.Feedback type="invalid">
        {errors.pincode}
      </FormControl.Feedback>
    </FormGroup>
  );
};

ShopDetailsFormGroup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired
};

export default ShopDetailsFormGroup;
