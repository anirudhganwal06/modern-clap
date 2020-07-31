import React from 'react';
import PropTypes from 'prop-types';

import ChatDefaultImg from '../../images/chat-default.png';

const ChatHeader = ({ avatar, name }) => {
  return (
    <div className="settings-tray">
      <div
        className="customer-drawer no-gutters"
        style={{ background: '#ebebeb' }}
      >
        <img className="profile-image" src={avatar || ChatDefaultImg} alt="" />
        <div className="text">
          <h6>{name}</h6>
          <p className="text-muted">Typing...</p>
        </div>
      </div>
    </div>
  );
};

ChatHeader.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default ChatHeader;
