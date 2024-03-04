import React from "react";
import "./CategoryCard.css";

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ category }) => {
  return (
    <div className='category-card'>
      <p>{category}</p>
    </div>
  );
};

export default CategoryCard;
