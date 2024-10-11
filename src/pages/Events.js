import React, { useEffect, useState } from 'react';
import '../components/Components_css/App.css';
import eventImage1 from '../images/img1.jpg'; // Update with your image paths
import eventImage2 from '../images/img2.jpg'; // Update with your image paths
import eventImage3 from '../images/img3.jpg'; // Update with your image paths
import testVideo from '../images/test.mp4'; // Update with your video path
import Footer from '../components/footer'; // Import your Footer component

const eventsData = [
  {
    title: 'Event 1',
    video: testVideo,
    date: 'Wednesday, 20th October 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: eventImage2,
    title: 'Event 2',
    date: 'Thursday, 21st October 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    video: testVideo,
    title: 'Event 3',
    date: 'Friday, 22nd October 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: eventImage3,
    title: 'Event 4',
    date: 'Monday, 25th October 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: eventImage2,
    title: 'Event 5',
    date: 'Tuesday, 26th October 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: eventImage1,
    title: 'Event 6',
    date: 'Thursday, 28th October 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const texts = [
  "Upcoming Events!!!",
  "Don't Miss Out!!!",
  "Join Us Soon!!!",
  "Exciting Events Ahead!!!"
];

export default function Events() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const element = document.querySelector('.events-title');
    const handleAnimationEnd = () => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      // Restart the animation
      element.style.animation = 'none';
      // eslint-disable-next-line no-unused-expressions
      element.offsetHeight; // Trigger reflow
      element.style.animation = '';
    };

    element.addEventListener('animationend', handleAnimationEnd);
    return () => {
      element.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <>
      <div className="events-container">
        <h1 className="events-title">{texts[currentTextIndex]}</h1>
        <div className="events-grid">
          {eventsData.map((event, index) => (
            <div className="event-card" key={index}>
            {event.image ? (
              <img src={event.image} alt={event.title} className="event-image" />
            ) : (
              <video src={event.video} controls className="event-video" />
            )}
              <h2>{event.title}</h2>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
        <h1 className="past-events-title reversetyping-element">Past Events!!!</h1>
        <div className="events-grid">
          {eventsData.map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.image} alt={event.title} className="event-image" />
              <h2>{event.title}</h2>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </>
  );
}