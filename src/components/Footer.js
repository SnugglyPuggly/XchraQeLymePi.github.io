import React from 'react';
import '../styles/Footer.css';

import facebookIcon from '../assets/images/facebook.png'; // Import Facebook icon

import instagramIcon from '../assets/images/instagram.png'; // Import Instagram icon
import whatsappIcon from '../assets/images/whatsapp.png'; // Import WhatsApp icon
import twitterIcon from '../assets/images/twitter.png'; // Import Twitter icon

function Footer() {
  return (
    <footer>
      <div className="bot-bar"> </div>
      <div className="footer-content">
        <p className="copyright">Copyright © 2025. Ethan, Inc. - All Rights Reserved.</p>
        {/*
        <div className="social-media-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
        */}
      </div>
    </footer>
  );
}


export default Footer;
