import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='footer-left'>
        <p>ArtBookYelp</p>
        <p>&nbsp;|&nbsp;</p>
        <p>123 Company Street</p>
        <p>&nbsp;|&nbsp;</p>
        <p>City 12345</p>
      </div>
      <div className='footer-right'>
        <p>Terms & Conditions</p>
        <p>Faq</p>
      </div>
    </footer>
  );
};

export default Footer;
