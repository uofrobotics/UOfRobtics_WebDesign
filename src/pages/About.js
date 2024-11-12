import React from 'react';
import '../components/Components_css/App.css';
import AboutCards from '../components/AboutCards';
import CoreTeam from '../components/CoreTeam';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
      <AboutCards />
      <CoreTeam />
      <Footer />
    </div>
  );
}

export default About;
