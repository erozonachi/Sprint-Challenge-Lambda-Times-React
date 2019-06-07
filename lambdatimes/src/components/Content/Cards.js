import React from 'react';
import Card from './Card';
import CardsContainer from './StyledComponents/CardsContainer';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <CardsContainer>
      {
        props.cards.map(card => <Card 
          headline={card.headline} 
          img={card.img} 
          author={card.author}
          tab={card.tab}
        />)
      }
    </CardsContainer>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cards;