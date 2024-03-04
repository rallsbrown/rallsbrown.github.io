import React from "react";
import "./Hero.css";
// import "../../public/assets/icons";

const Hero = () => {
  return (
    <main className='hero'>
      <img className='play-button' src='/play-button.svg' alt='play button' />
      <h1 className='hero-h1'>Rate and Review Local Events</h1>
      <div className='join'>
        <p className='join-text'>JOIN NOW</p>
      </div>
    </main>
  );
};

export default Hero;
