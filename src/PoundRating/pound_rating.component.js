/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './pound_rating.component.sass';

// I wanted to go Array.from but IE...
const STUB_ARRAY = [1, 1, 1, 1, 1];

const Rating = ({ isActive }) => (
  <div className={classnames('pound-rating', { active: isActive })}></div>
);

Rating.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

const PoundRatingComponent = ({ rating }) => {
  const ratingsArray = STUB_ARRAY
    .map((_, i) => <Rating key={i} isActive={i < rating} />);

  return (
    <div className="pound-rating-container">
      {ratingsArray}
    </div>
  );
};

PoundRatingComponent.propTypes = {
  rating: PropTypes.number.isRequired,
};

PoundRatingComponent.defaultProps = {
  rating: 0,
};

export {
  PoundRatingComponent,
  Rating,
};
