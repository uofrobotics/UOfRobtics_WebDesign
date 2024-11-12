import React from 'react';
import 'animate.css';
import './Components_css/EventCard.css';

function EventCard({ imgSrc, title, date, location, type, buttonText, onClick }) {
  const randomDuration = `${Math.floor(Math.random() * 30) + 10}s`;

  return (
    <div className="event-card animate__animated animate__fadeInUp">
      <img src={imgSrc} alt={title} className="event-card__img animate__animated animate__zoomIn" />
      <div className="event-card__content">
        <h3 className="event-card__title animate__animated animate__fadeInDown">{title}</h3>
        <p className="event-card__date animate__animated animate__fadeInLeft">{date}</p>
        <p className="event-card__location animate__animated animate__fadeInLeft">{location}</p>
        <p className="event-card__type animate__animated animate__fadeInLeft">{type}</p>
        <button className="event-card__button animate__animated animate__swing animate__infinite" style={{ animationDuration: randomDuration }} onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default EventCard;
