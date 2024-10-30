import React from 'react';
import './Components_css/EventCard.css';

function EventCard({ imgSrc, title, date, location, type, buttonText, onClick }) {
  return (
    <div className="event-card">
      <img src={imgSrc} alt={title} className="event-card__img" />
      <div className="event-card__content">
        <h3 className="event-card__title">{title}</h3>
        <p className="event-card__date">{date}</p>
        <p className="event-card__location">{location}</p>
        <p className="event-card__type">{type}</p>
        <button className="event-card__button" onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default EventCard;
