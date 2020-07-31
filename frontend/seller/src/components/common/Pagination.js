import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { ChevronLeft, ChevronRight } from 'react-feather';

const Pagination = ({ total, page, limit, setPage }) => {
  const pageLinksJSX = [];
  const totalPages = Math.floor((total - 1) / limit) + 1;

  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++)
      pageLinksJSX.push(
        <li key={i}>
          <a
            href="#!"
            className={classnames({ dv_active_page: i === page })}
            onClick={e => {
              e.preventDefault();
              setPage(i);
            }}
          >
            {i}
          </a>
        </li>
      );

    return (
      <div className="dv_pagination">
        <ul>{pageLinksJSX}</ul>
      </div>
    );
  }

  return (
    <div className="dv_pagination">
      <ul>
        {page !== 1 && (
          <li>
            <a
              href="#!"
              onClick={e => {
                e.preventDefault();
                setPage(page - 1);
              }}
            >
              <ChevronLeft />
            </a>
          </li>
        )}
        <li>
          <a
            href="#!"
            onClick={e => {
              e.preventDefault();
              setPage(1);
            }}
            className={classnames({ dv_active_page: page === 1 })}
          >
            1
          </a>
        </li>
        {page > 2 && <li>...</li>}
        {page === 1 ? (
          <li>
            <a href="#!" onClick={e => {
              e.preventDefault();
              setPage(2);
            }}>
              2
            </a>
          </li>
        ) : page === totalPages ? (
          <li>
            <a href="#!" onClick={e => {
              e.preventDefault();
              setPage(totalPages - 1);
            }}>
              {totalPages - 1}
            </a>
          </li>
        ) : (
          <li>
            <a href="#!" className="dv_active_page">
              {page}
            </a>
          </li>
        )}
        {page < totalPages - 1 && <li>...</li>}
        <li>
          <a
            href="#!"
            onClick={e => {
              e.preventDefault();
              setPage(totalPages);
            }}
            className={classnames({ dv_active_page: page === totalPages })}
          >
            {totalPages}
          </a>
        </li>
        {page !== totalPages && (
          <li>
            <a href="#!" onClick={e => {
              e.preventDefault();
              setPage(page + 1);
            }}>
              <ChevronRight />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
};

export default Pagination;
