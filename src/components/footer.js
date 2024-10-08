import React from 'react';
import facebook_logo from '../images/facebook_logo.png'
import instagram_logo from '../images/instagram_logo.png'
import twitter_logo from '../images/twitter_logo.png'
import './Components_css/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return(
<footer className="footer-container">
      <p>Contact us at: support@uofrobotics.com</p>
      <div className="social-icons">
        <a class="social-icon-link" href="#"><img class="social-logo"  src={facebook_logo} /></a>
        <a class="social-icon-link" href="#"><img class="social-logo"  src={instagram_logo} /></a>
        <a class="social-icon-link" href="#"><img class="social-logo"  src={twitter_logo} /></a>
      </div>
    </footer>
  ); 
}

export default Footer;
