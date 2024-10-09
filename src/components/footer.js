import React from 'react';
import './Components_css/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-contact">Contact us at: support@uofrobotics.com</p>
      <div className="social-media-links">
        <a href="https://www.facebook.com/UofRobotics?mibextid=ZbWKwL" className="social-link" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://www.instagram.com/uof_robotics/profilecard/?igsh=MWUxNXN5OHZuczF2Zg==" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  ); 
}

export default Footer;
