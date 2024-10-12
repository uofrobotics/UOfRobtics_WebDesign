import React from "react";
import AboutItem from "./AboutItem";
import './Components_css/About_Cards.css';
import img from '../images/about-img-1.jpg';
import img2 from '../images/about-img-2.jpeg';
import img3 from '../images/about-img-3.jpg';

function AboutCards() {
  return (
    <div className="about_cards">
      <h1>About us</h1>  
      <div className="about__text-block about__text-block--top">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis mollis lectus, id blandit sapien dignissim eget. Duis ultricies quam et leo interdum, nec aliquam nisi scelerisque. Phasellus auctor nulla sed turpis tincidunt, at dignissim dui tempus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis mollis lectus, id blandit sapien dignissim eget.</p>
      </div>
      <div className="about__container">
        <div className="about__wrapper">
          <div className="about__item about__item--large-center">
            <AboutItem 
              path="/about" 
              src={img} 
              alt="About Us Image" 
              text="Journey begins" 
            />
          </div>
          <div className="about__item about__item--right">
            <AboutItem 
              path="/team" 
              src={img2} 
              alt="Team Image" 
              text="And so the story continues" 
            />
          </div>
          <div className="about__item about__item--left">
            <AboutItem 
              path="/2021" 
              src={img3} 
              alt="Team Image" 
              text="Journey ends" 
            />
          </div>
        </div>
      </div>
      <div className="about__text-block about__text-block--bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis mollis lectus, id blandit sapien dignissim eget. Duis ultricies quam et leo interdum, nec aliquam nisi scelerisque. Phasellus auctor nulla sed turpis tincidunt, at dignissim dui tempus.</p>
      </div>
    </div>
  );
}

export default AboutCards;
