import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='footer-left'>
        <p>
          ArtBookYelp &nbsp;|&nbsp; 123 Company Street &nbsp;|&nbsp; City 12345
        </p>
      </div>
      <div className='footer-right'>
        <p>Terms & Conditions</p>
        <p>Faq</p>
      </div>
    </footer>
  );
};

export default Footer;
