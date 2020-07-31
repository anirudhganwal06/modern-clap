import React, { useState } from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';

import SwitchBusiness from '../components/common/SwitchBusiness';
import ChatList from '../components/Inbox/ChatList';
import ChatHeader from '../components/Inbox/ChatHeader';
import Message from '../components/Inbox/Message';
import MessageInput from '../components/Inbox/MessageInput';

import WhatsappMediaImg from '../images/whatapp-media.jpg';

const Inbox = () => {
  document.title = 'Inbox - Modernclap';

  const chatList = [
    {
      name: 'Modernclap',
      lastMessage: 'How may i help you',
      time: '00:32',
      img: null
    },
    {
      name: 'Skynet',
      lastMessage: 'Seen that canned piece of s?',
      time: '13:21',
      img:
        'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg'
    },
    {
      name: 'Termy',
      lastMessage: 'Im studying spanish...',
      time: '13:21',
      img: 'http://i66.tinypic.com/2qtbqxe.jpg'
    },
    {
      name: 'Richard',
      lastMessage: "I'm not sure...",
      time: '13:21',
      img:
        'https://cdn.vox-cdn.com/thumbor/AYUayCXcqYxHDkR4a1N9azY5c_8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9375391/MV5BYjg1Yjk1MTktYzE5Mi00ODkwLWFkZTQtNTYxYTY3ZDVmMWUxXkEyXkFqcGdeQXVyNjUwNzk3NDc_._V1_.jpg'
    },
    {
      name: 'XXXXX',
      lastMessage: 'Hi, wanna see something?',
      time: '13:21',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzQ3HEvJBpgptB48mdCwRt_BHrmNrDwQiIlrjgJbDKihAV_NI'
    },
    {
      name: 'Optimus',
      lastMessage: 'Wanna grab a beer?',
      time: '00:32',
      img: null
    },
    {
      name: 'Skynet',
      lastMessage: 'Seen that canned piece of s?',
      time: '13:21',
      img:
        'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg'
    },
    {
      name: 'Termy',
      lastMessage: 'Im studying spanish...',
      time: '13:21',
      img: 'http://i66.tinypic.com/2qtbqxe.jpg'
    },
    {
      name: 'Richard',
      lastMessage: "I'm not sure...",
      time: '13:21',
      img:
        'https://cdn.vox-cdn.com/thumbor/AYUayCXcqYxHDkR4a1N9azY5c_8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9375391/MV5BYjg1Yjk1MTktYzE5Mi00ODkwLWFkZTQtNTYxYTY3ZDVmMWUxXkEyXkFqcGdeQXVyNjUwNzk3NDc_._V1_.jpg'
    },
    {
      name: 'XXXXX',
      lastMessage: 'Hi, wanna see something?',
      time: '13:21',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzQ3HEvJBpgptB48mdCwRt_BHrmNrDwQiIlrjgJbDKihAV_NI'
    },
    {
      name: 'Optimus',
      lastMessage: 'Wanna grab a beer?',
      time: '00:32',
      img: null
    },
    {
      name: 'Skynet',
      lastMessage: 'Seen that canned piece of s?',
      time: '13:21',
      img:
        'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg'
    },
    {
      name: 'Termy',
      lastMessage: 'Im studying spanish...',
      time: '13:21',
      img: 'http://i66.tinypic.com/2qtbqxe.jpg'
    },
    {
      name: 'Richard',
      lastMessage: "I'm not sure...",
      time: '13:21',
      img:
        'https://cdn.vox-cdn.com/thumbor/AYUayCXcqYxHDkR4a1N9azY5c_8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9375391/MV5BYjg1Yjk1MTktYzE5Mi00ODkwLWFkZTQtNTYxYTY3ZDVmMWUxXkEyXkFqcGdeQXVyNjUwNzk3NDc_._V1_.jpg'
    },
    {
      name: 'XXXXX',
      lastMessage: 'Hi, wanna see something?',
      time: '13:21',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzQ3HEvJBpgptB48mdCwRt_BHrmNrDwQiIlrjgJbDKihAV_NI'
    }
  ];

  const messages = [
    {
      user: 'sender',
      type: 'text',
      body:
        'Hello, seller I have one question..! can you please answer me ASAP..! how can i reshedule the appointment'
    },
    { user: 'me', type: 'text', body: 'Hello sir, How may I help you..!' },
    { user: 'sender', type: 'text', body: 'I need to reschedule booking.' },
    {
      user: 'me',
      type: 'text',
      body:
        'May i know you Booking ID please. so after that i can reshdule the Booking.'
    },
    {
      user: 'sender',
      type: 'text',
      body: 'Yes Booking number is MD12345 i have sent appointment image also.'
    },
    { user: 'sender', type: 'image', body: WhatsappMediaImg },
    { user: 'me', type: 'text', body: 'Thank You ..!' },
    {
      user: 'me',
      type: 'text',
      body: 'I am checking, gie me little bit time.'
    },
    { user: 'sender', type: 'text', body: 'Yes please..!' }
  ];

  const [activeChat, setActiveChat] = useState(0);

  return (
    <Container fluid>
      <SwitchBusiness
        title="Goodhand Transaction LLC"
        options={[
          'Change',
          'Orville Real Estate',
          'Lightspeed General Trading',
          'Alahsa Stone',
          'TOG'
        ]}
      />

      <h1 className="mt-4 dv_page_heading">Inbox</h1>
      <Card className="mb-4">
        <Row className="no-gutters">
          <Col md={4} className="border-right">
            <ChatList
              chatList={chatList}
              active={activeChat}
              setActive={setActiveChat}
            />
          </Col>
          <Col md={8}>
            <ChatHeader
              avatar={chatList[activeChat].img}
              name={chatList[activeChat].name}
            />
            <div className="chat-panel">
              <div className="dv_right_customer_chat">
                {messages.map((message, index) => (
                  <Message key={index} message={message} />
                ))}
              </div>
              <MessageInput onSubmit={message => console.log(message)} />
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Inbox;
