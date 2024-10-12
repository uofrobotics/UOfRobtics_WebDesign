import React from 'react';
import './Components_css/About.css';

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
