import React from 'react';
import facebook_logo from '../images/facebook_logo.png'
import instagram_logo from '../images/instagram_logo.png'
import twitter_logo from '../images/twitter_logo.png'
import './Components_css/Footer.css';

function Footer() {
<<<<<<< HEAD
  return (
    <footer className="footer-container">
      <p className="footer-contact">Contact us at: support@uofrobotics.com</p>
      <div className="social-media-links">
        <a href="https://www.facebook.com/UofRobotics?mibextid=ZbWKwL" className="social-link" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://www.instagram.com/uof_robotics/profilecard/?igsh=MWUxNXN5OHZuczF2Zg==" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
=======
  return(
<footer className="footer-container">
      <p>Contact us at: support@uofrobotics.com</p>
      <div className="social-icons">
        <a class="social-icon-link" href="#"><img class="social-logo"  src={facebook_logo} /></a>
        <a class="social-icon-link" href="#"><img class="social-logo"  src={instagram_logo} /></a>
        <a class="social-icon-link" href="#"><img class="social-logo"  src={twitter_logo} /></a>
>>>>>>> 4452499ce9d9a262c481860a269ee09073d6a022
      </div>
    </footer>
  ); 
}

export default Footer;
