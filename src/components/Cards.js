import React from 'react';
import './Components_css/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="card-container">
      <div className="card">
        <img src="image1.jpg" alt="Robotics team work" />
      </div>
      <div className="card">
        <img src="image2.jpg" alt="Robotics students building" />
      </div>
      <div className="card">
        <img src="image3.jpg" alt="Robotics presentation" />
      </div>
      <div className="card">
        <img src="image4.jpg" alt="Students at a robotics event" />
      </div>
    </div>
  );
};

export default Cards;
