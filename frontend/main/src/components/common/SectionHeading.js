import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { ReactComponent as Tick } from '../../svgs/tick.svg';

const SectionHeading = ({
  title,
  subtitle,
  modal,
  linkText,
  className,
  onClick
}) => {
  return (
    <span className={'dv_section_heading ' + className}>
      <Tick />
      {title} <span className="dv_sm_overview"> {subtitle}</span>
      {linkText && (
        <Link
          to={'#' + modal}
          onClick={onClick}
          replace
          className="dv_edit_for_all"
        >
          {linkText}
        </Link>
      )}
    </span>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  modal: PropTypes.string,
  linkText: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default SectionHeading;
