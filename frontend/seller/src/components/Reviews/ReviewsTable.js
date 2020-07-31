import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Table, Dropdown } from 'react-bootstrap';
import { MoreVertical, Star } from 'react-feather';

import Search from '../common/Search';
import Pagination from '../common/Pagination';

const ReviewsTable = ({ reviews, viewReview }) => {
  return (
    <>
      <Search />
      <Table className="table" width="100%" cellSpacing={0} responsive>
        <thead>
          <tr>
            <th>date </th>
            <th>ref id </th>
            <th>tools </th>
            <th>work </th>
            <th>behaviour </th>
            <th>rating </th>
            <th>review </th>
            <th>action </th>
          </tr>
          <tr>
            <th />
            <th />
            <th>3.8</th>
            <th>4.3</th>
            <th>2.9</th>
            <th>4.1</th>
            <th>234</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={index}>
              <td>{review.date}</td>
              <td>
                <Link
                  to={'/request/' + review.orderId}
                  style={{ fontFamily: 'Segoe ui bold' }}
                >
                  {review.orderId}
                </Link>
              </td>
              <td>{review.toolsRating}</td>
              <td>{review.workRating}</td>
              <td>{review.behaviourRating}</td>
              <td>
                <Star width={15} height={15} fill="gold" strokeWidth={0} />{' '}
                {review.overallRating}
              </td>
              <td>
                <span
                  style={{
                    display: 'block',
                    width: '80px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {review.text}
                </span>
              </td>
              <Dropdown as="td">
                <Dropdown.Toggle as="a" className="dv_everytable_action">
                  <MoreVertical />
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                  <Dropdown.Item
                    as="a"
                    onClick={e => {
                      e.preventDefault();
                      viewReview(index);
                    }}
                  >
                    View Review
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination />
    </>
  );
};

ReviewsTable.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      orderId: PropTypes.string.isRequired,
      toolsRating: PropTypes.number.isRequired,
      workRating: PropTypes.number.isRequired,
      behaviourRating: PropTypes.number.isRequired,
      overallRating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  viewReview: PropTypes.func.isRequired
};

export default ReviewsTable;
