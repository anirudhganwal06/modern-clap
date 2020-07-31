import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Pagination = () => {
  return (
    <div className="dv_pagination">
      <ul>
        <li>
          <Link to="#">
            <ChevronLeft />
          </Link>
        </li>
        <li>
          <Link to="#">1</Link>
        </li>
        <li>
          <Link to="#">2</Link>
        </li>
        <li>
          <Link to="#" className="dv_active_page">
            3
          </Link>
        </li>
        <li>...</li>
        <li>
          <Link to="#">8</Link>
        </li>
        <li>
          <Link to="#">
            <ChevronRight />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
