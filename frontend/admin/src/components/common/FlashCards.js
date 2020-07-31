import React from 'react';
import PropTypes from 'prop-types';

const FlashCards = ({ cards }) => {
  const cardsJSX = cards.map((card, index) => (
    <div className="dv_toast_wrapper" key={index}>
      <img src={card.img} alt="" />
      <div className="dv_toast_wrapper_details">
        <span>{card.name}</span>
        <span>
          <strong>{card.service} </strong>
          {card.message}
        </span>
      </div>
    </div>
  ));
  return <div className="dv_toast cursor-pointer">{cardsJSX}</div>;
};

FlashCards.propTypes = {
  cards: PropTypes.array
};

export default FlashCards;
