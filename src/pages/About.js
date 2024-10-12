import React from 'react';
import '../components/Components_css/App.css';
import Team from '../components/CoreTeam';
import AboutCards  from '../components/AboutCards';
import Footer from '../components/footer'
import CoreTeam from '../components/CoreTeam';


 function About() {
  return(
<div>
    <AboutCards/>
    <CoreTeam/>
    <Footer />
    
    </div>
  );

}

export default About;
