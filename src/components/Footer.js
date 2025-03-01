import React from 'react';
import facebook_logo from '../images/facebook_logo.png';
import instagram_logo from '../images/instagram_logo.png';
import discord_logo from '../images/discord.png';
import './Components_css/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <p>Contact us at: support@uofrobotics.com</p>
      <div className="social-icons">
        <a className="social-icon-link" href="https://www.facebook.com/UofRobotics?mibextid=ZbWKwL"><img className="social-logo"alt =" facebook" src={facebook_logo} /></a>
        <a className="social-icon-link" href="https://www.instagram.com/uof_robotics/profilecard/?igsh=MWUxNXN5OHZuczF2Zg%3D%3D"><img className="social-logo" alt=" instagram" src={instagram_logo} /></a>
        <a className="social-icon-link" href="https://discord.gg/EJudSWQY"><img className="social-logo" alt="Discord" src={discord_logo}  /></a>
      </div>
    </footer>
  );
}

export default Footer;
