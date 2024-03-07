import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1 className='name'>ArtBookYelp</h1>
      <div className='header-right'>
        {/* <span>write a review</span> */}
        <p className='review-link'>Write a Review</p>
        <div className='header-buttons'>
          <button className='login'>Login</button>
          <button className='signUp'>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
