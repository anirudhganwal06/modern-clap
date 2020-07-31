import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Row, Col } from 'react-bootstrap';

const Message = ({ message }) => {
  let messageBody;
  const dir = message.user === 'me' ? 'right' : 'left';

  switch (message.type) {
    case 'text':
      messageBody = message.body;
      break;
    case 'image':
      messageBody = (
        <>
          <img src={message.body} style={{ width: '100%' }} alt="" />
          <ul className="dv_chat_media_option">
            <li>
              <a href="#!">Download</a>
            </li>
          </ul>
        </>
      );
      break;
    default:
      messageBody = 'Unknown message';
  }

  return (
    <Row className="no-gutters">
      <Col
        md={9}
        className={classnames({ 'offset-md-3': message.user === 'me' })}
      >
        <div className={`chat-bubble chat-bubble--${dir}`}>{messageBody}</div>
      </Col>
    </Row>
  );
};

Message.propTypes = {
  message: PropTypes.exact({
    type: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default Message;
