import React from 'react';

import { Search as SearchSVG } from 'react-feather';
import { FormControl } from 'react-bootstrap';

const Search = () => {
  return (
    <div className="dv_search_input_for_all">
      <SearchSVG />
      <input
        type="text"
        placeholder="Search"
        className="dv_search_anything_tbl"
      />
      <FormControl as="select">
        <option>10 </option>
        <option>25</option>
        <option>50 </option>
        <option>100 </option>
      </FormControl>
    </div>
  );
};

export default Search;
