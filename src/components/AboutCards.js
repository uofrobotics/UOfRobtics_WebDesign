import React, { useEffect } from "react";
import AboutItem from "./AboutItem";
import './Components_css/About_Cards.css';
import img from '../images/about-img-1.jpg';
import img2 from '../images/about-img-2.jpeg';
import img3 from '../images/about-img-3.jpg';

function AboutCards() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            entry.target.classList.add(entry.target.dataset.animation);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    document.querySelectorAll('.animated-section').forEach(section => {
      observer.observe(section);
    });

  }, []);

  return (
    <div className="about_cards">
      <h1 className="animated-section" data-animation="animate__fadeIn">About us</h1>  
      <div className="about__text-block about__text-block--top animated-section" data-animation="animate__fadeIn">
        <p>Welcome to URobotics, a passionate community of makers, coders, and tech enthusiasts at the University of Regina! Our club, proudly based in the "Lava Pit" of the Education Building, is where creativity and innovation come to life. We’re all about bringing together students with a shared interest in robotics,
           technology, and hands-on projects, no matter their background or experience level..</p>
        
      </div>
      
      {/* Projects Section */}
      <div className="about__container animated-section" data-animation="animate__fadeInUp">
        <h2>Projects</h2>
        <div className="about__text-block about__text-block--projects animated-section" data-animation="animate__fadeInUp">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat libero at sem tincidunt, vel pharetra ex dignissim. Nam ut erat nec justo dictum ultricies.</p>
        </div>
        <div className="about__wrapper">
          <div className="about__item about__item--large-center animated-section" data-animation="animate__zoomIn">
            <AboutItem 
              path="/projects" 
              src={img} 
              alt="Project Image 1"
            />
          </div>
          <div className="about__item about__item--right animated-section" data-animation="animate__zoomIn">
            <AboutItem 
              path="/projects" 
              src={img2} 
              alt="Project Image 2"
            />
          </div>
        </div>
      </div>

      {/* Talks Section */}
      <div className="about__container animated-section" data-animation="animate__fadeInUp">
        <h2>Talks</h2>
        <div className="about__text-block about__text-block--talks animated-section" data-animation="animate__fadeInUp">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius justo non justo commodo, id vestibulum eros vehicula. Phasellus a urna nisi.</p>
        </div>
        <div className="about__wrapper">
          <div className="about__item about__item--left animated-section" data-animation="animate__zoomIn">
            <AboutItem 
              path="/talks" 
              src={img3} 
              alt="Talk Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCards;
