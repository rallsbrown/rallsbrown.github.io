import React from "react";
import "./StarRating.css";

// eslint-disable-next-line react/prop-types
const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <img key={i} className='star' src='src/assets/icons/star-full.svg' />
      );
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <img key={i} className='star' src='src/assets/icons/star-split.svg' />
      );
    } else {
      stars.push(
        <img key={i} className='star' src='src/assets/icons/star-empty.svg' />
      );
    }
  }
  return <div className='star-rating'>{stars}</div>;
};

export default StarRating;
