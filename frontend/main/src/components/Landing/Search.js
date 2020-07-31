import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import AutoComplete from 'react-autocomplete';
import { ChevronDown } from 'react-feather';

import LocationModal from './Location';

import { ReactComponent as India } from '../../svgs/india.svg';

const menuStyle = {
  border: 'none',
  background: '#fff',
  cursor: '#333',
  fontSize: '1em',
  margin: 0,
  padding: 0,
  outline: 0,
  position: 'absolute',
  overflow: 'auto',
  zIndex: 2
};

const itemStyle = isHighlighted => ({
  position: 'relative',
  padding: '10px',
  fontSize: '13px',
  borderBottom: '1px solid #ebebeb',
  cursor: 'pointer',
  background: isHighlighted ? '#2874f0' : 'inherit',
  transition: '100ms',
  color: isHighlighted ? '#fff' : 'inherit'
});

const SearchBar = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [listOpen, setListOpen] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const history = useHistory();

  return (
    <>
      <AutoComplete
        getItemValue={item => item}
        placeholder="Search for a service"
        items={items}
        wrapperProps={{ className: 'dv_drp_search', style: {} }}
        menuStyle={menuStyle}
        autoHighlight={false}
        renderItem={(item, isHighlighted) => (
          <div style={itemStyle(isHighlighted)}>{item}</div>
        )}
        renderInput={props => (
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text
                className="dv_input_text_group"
                onClick={() => setLocationModal(true)}
              >
                <India width={15} style={{ margin: '0 15px 0 0' }} />
                Mumbai
                <ChevronDown className="dv_arrow_down_search" size={24} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              {...props}
              type="text"
              id="searchservices"
              className="dv_group_search_input"
              placeholder="Search for a service"
              style={{ borderBottomRightRadius: listOpen ? 0 : '.25em' }}
              onFocus={() => {
                if (window.innerWidth < 991) history.push('/search');
              }}
              onBlur={() => setListOpen(false)}
            />
          </InputGroup>
        )}
        value={searchTerm}
        open={listOpen}
        onChange={e => {
          setSearchTerm(e.target.value);
          if (!listOpen && e.target.value !== '') setListOpen(true);
          else if (listOpen && e.target.value === '') setListOpen(false);
        }}
        onSelect={val => setSearchTerm(val)}
        shouldItemRender={(item, value) =>
          item.search(new RegExp(value, 'i')) !== -1
        }
      />
      <LocationModal
        isOpen={locationModal}
        close={() => setLocationModal(false)}
      />
    </>
  );
};

SearchBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SearchBar;
