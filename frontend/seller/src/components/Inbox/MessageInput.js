import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, FormControl, Form, Button } from 'react-bootstrap';
import { Smile, Paperclip } from 'react-feather';

const MessageInput = ({ onSubmit }) => {
  const [messageText, setMessageText] = useState('');

  return (
    <Row>
      <Col xs={12}>
        <Form
          className="chat-box-tray"
          onSubmit={e => {
            e.preventDefault();
            if (messageText.trim() !== '') {
              setMessageText('');
              onSubmit(messageText);
            }
          }}
        >
          <Smile size={24} style={{ margin: '0 10px 0 0', color: '#999' }} />
          <FormControl
            className="dv_type_txt_reply"
            type="text"
            placeholder="Type your message here..."
            value={messageText}
            onChange={e => setMessageText(e.target.value)}
          />
          <Paperclip
            style={{ margin: '0 10px 0 0', color: '#999' }}
            size={24}
          />
          <Button
            type="button"
            style={{ borderRadius: '25px', height: '46px' }}
            onClick={() => {
              if (messageText.trim() !== '') {
                setMessageText('');
                onSubmit(messageText);
              }
            }}
          >
            Send
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

MessageInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default MessageInput;
