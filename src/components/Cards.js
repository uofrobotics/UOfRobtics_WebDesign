import React from 'react';
import './Components_css/Cards.css';
import img1 from '../images/img1.jpg'; // Import each image
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.JPG';

function Cards() {
  return (
    <div className="card-container">
      <div className="card">
        <img src={img1} alt="Robotics team work" />
      </div>
      <div className="card">
        <img src={img2} alt="Robotics students building" />
      </div>
      <div className="card">
        <img src={img3} alt="Robotics presentation" />
      </div>
      <div className="card">
        <img src={img4} alt="Students at a robotics event" />
      </div>
    </div>
  );
}

export default Cards;
