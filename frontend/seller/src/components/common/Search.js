import React from 'react';
import PropTypes from 'prop-types';

import { Search as SearchSVG } from 'react-feather';
import { FormControl } from 'react-bootstrap';

const Search = ({ limit, noLimit, setLimit }) => {
  return (
    <div className="dv_search_input_for_all">
      <SearchSVG />
      <input
        type="text"
        placeholder="Search"
        className="dv_search_anything_tbl"
      />
      {!noLimit && (
        <FormControl
          as="select"
          value={limit}
          onChange={e => setLimit(+e.target.value)}
        >
          <option value={10}>10 </option>
          <option value={25}>25</option>
          <option value={50}>50 </option>
          <option value={100}>100 </option>
        </FormControl>
      )}
    </div>
  );
};

Search.propTypes = {
  limit: PropTypes.number,
  noLimit: PropTypes.bool,
  setLimit: PropTypes.func
};

export default Search;
