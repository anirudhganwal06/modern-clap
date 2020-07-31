import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogCard = props => {
  return (
    <div className="dv_blog_cards">
      <Link to={props.link}>
        <img src={props.imgSrc} alt={props.heading} />
        <div className="dv_blog_heading">{props.heading}</div>
        <p className="dv_blog_p">{props.desc}</p>
        <span className="dv_blog_date">{props.date}</span>
      </Link>
    </div>
  );
};

BlogCard.propTypes = {
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default BlogCard;
