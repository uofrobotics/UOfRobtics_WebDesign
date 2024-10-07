import React from 'react';
import './Components_css/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return(
<footer className="footer-container">
      <p>Contact us at: support@uofrobotics.com</p>
      <div className="social-media-links">
        <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
      </div>
    </footer>
  ); 
}

export default Footer;
