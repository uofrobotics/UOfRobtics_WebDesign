import React from 'react';
import { Link } from 'react-router-dom';
import './Components_css/About_Cards.css';

function AboutItem(props) {
  return (
    <li className="about__item">
      <Link className="about__item__link" to={props.path}>
        <figure className="about__item__pic__wrap">
          <img src={props.src} alt={props.alt} className="about__item__img" />
        </figure>
      </Link>
    </li>
  );
}

export default AboutItem;
