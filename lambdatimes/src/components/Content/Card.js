import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div>
      <div>{props.headline}</div>
      <div>
        <div>
          <img src={props.img} alt={props.headline} />
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  headline: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
}

export default Card;
