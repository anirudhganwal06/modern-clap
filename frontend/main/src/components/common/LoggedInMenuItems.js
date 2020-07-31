import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Link } from 'react-router-dom';

import { ReactComponent as Avatar } from '../../svgs/avatar.svg';
import { ReactComponent as Bookings } from '../../svgs/bookings.svg';
import { ReactComponent as MyReviews } from '../../svgs/my-reviews.svg';

const GET_CUSTOMER_NAME = gql`
  query {
    user @client {
      name
    }
  }
`;

const LoggedInMenuItems = () => {
  const { data } = useQuery(GET_CUSTOMER_NAME);
  let username = 'Username';

  if (data && data.user)
    username = data.user.name;

  return (
    <div className="dv_after_login_menus">
      <ul className="dv_menu_links_a" style={{ margin: '0 0 30px 0' }}>
        <li>
          <Link to="#">
            <Avatar />
            {username}
          </Link>
        </li>
        <li>
          <Link to="/bookings">
            <Bookings />
            My Bookings
          </Link>
        </li>
        <li>
          <Link to="/my-reviews">
            <MyReviews />
            My Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LoggedInMenuItems;