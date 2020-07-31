import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { gql, useQuery } from '@apollo/client';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Menu } from 'react-feather';

import MenuModal from './Menu';
import SearchBar from '../Landing/Search';
import { ReactComponent as LogoSVG } from '../../svgs/logo.svg';

const items = [
  'dubai',
  'Daira',
  'Abu Dhabi',
  'Sharjha',
  'JLT',
  'C++',
  'Clojure',
  'COBOL',
  'ColdFusion',
  'Erlang',
  'Fortran',
  'Groovy',
  'Haskell',
  'Java',
  'JavaScript',
  'Lisp',
  'Perl',
  'PHP',
  'Python',
  'Ruby',
  'Scala',
  'Scheme',
  'Task'
];

const IS_LOGGED_IN = gql`
  query {
    isLoggedIn @client
  }
`;

const Header = props => {
  const [fixed, setFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 100 ? !fixed : fixed) setFixed(window.scrollY >= 100);
  };

  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <header className={props.headerClassName}>
      <Navbar
        expand="sm"
        variant="none"
        className={classnames('dv_fixed_navbar', {
          dv_fixed_menu: fixed
        })}
      >
        <Container>
          {/* Brand */}
          <Navbar.Brand
            as={Link}
            className={classnames('dv_logo_icon', {
              dv_menu_scroll_style: fixed
            })}
            to="/"
          >
            <LogoSVG width={150} />
          </Navbar.Brand>
          {/* Links */}
          <Nav as="ul" className="float-right dv_menu_top">
            <Nav.Item as="li">
              <Link
                style={{ display: 'none' }}
                className="dv_sm_show"
                to="/book-now"
              >
                book now
              </Link>
              <Nav.Link
                as={Link}
                to="#"
                className={classnames({
                  dv_menu_scroll_style: fixed
                })}
                onClick={e => {
                  e.preventDefault();
                  setMenuOpen(true);
                }}
              >
                {!(data && data.isLoggedIn) && 'Login'} <Menu size={24} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <div className="dv_heading_search">
        <Container>
          <h1 className="dv_home_Service_content">{props.title}</h1>
          <p className="dv_home_Service_content_p">{props.desc}</p>
          {props.bookNow ? (
            <Link to="/book-now" className="dv_book_now_service">
              book now
            </Link>
          ) : (
            ''
          )}
          {props.search ? <SearchBar items={items} /> : ''}
        </Container>
      </div>

      <MenuModal
        open={menuOpen}
        showMenu={setMenuOpen}
      />
    </header>
  );
};

Header.propTypes = {
  headerClassName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  search: PropTypes.bool,
  bookNow: PropTypes.bool
};

Header.defaultProps = {
  search: false,
  bookNow: false
};

export default Header;
