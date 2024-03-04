import React from "react";
import "./ReviewCard.css";
import StarRating from "./StarRating";

// eslint-disable-next-line react/prop-types
const ReviewCard = ({ name, rating, content }) => {
  return (
    <div className='card'>
      <div className='image'></div>
      <div className='event-info'>
        <p className='event-name'>{name}</p>
        <StarRating rating={rating} />
        <p className='event-content'>{content}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
