import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FormControl } from 'react-bootstrap';

import ChatDefaultImg from '../../images/chat-default.png';

const ChatList = ({ chatList, active, setActive }) => {
  return (
    <>
      <div className="search-box">
        <div className="input-wrapper">
          <FormControl
            className="dv_search_customer"
            placeholder="Search"
            type="text"
          />
        </div>
      </div>
      <div className="dv_left_customer_height">
        {chatList.map((chatListItem, index) => (
          <div
            key={index}
            className={classnames('customer-drawer customer-drawer--onhover', {
              active: index === active
            })}
            onClick={() => setActive(index)}
          >
            <img
              className="profile-image"
              src={chatListItem.img || ChatDefaultImg}
              style={{ opacity: chatListItem.img ? 1.0 : 0.5 }}
              alt=""
            />
            <div className="text">
              <h6>{chatListItem.name}</h6>
              <p className="text-muted">{chatListItem.lastMessage}</p>
            </div>
            <span className="time text-muted small">{chatListItem.time}</span>
          </div>
        ))}
      </div>
    </>
  );
};

ChatList.propTypes = {
  chatList: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      lastMessage: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      img: PropTypes.string
    })
  ).isRequired,
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired
};

export default ChatList;
