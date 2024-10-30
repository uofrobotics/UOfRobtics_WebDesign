import React, { useState } from 'react';
import RegistrationModal from '../components/RegistrationModal';
import EventCard from '../components/EventCard';
import '../components/Components_css/Events.css';
import img1 from '../images/about-img-1.jpg';
import img2 from '../images/about-img-2.jpeg';
import img3 from '../images/about-img-3.jpg';
import Footer from '../components/footer';

function Events() {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const upcomingEvents = [
    { id: 1, imgSrc: img1, title: "Tech Talks: Future of Robotics", date: "November 5, 2024, 6:00 PM - 8:00 PM", location: "Online Lecture", type: "Event Type: Online Lecture", buttonText: "Register", onClick: openModalHandler },
    { id: 2, imgSrc: img2, title: "Robot Building Workshop", date: "November 5, 2024, 6:00 PM - 8:00 PM", location: "Engineering Lab Building, Room 205", type: "Event Type: Workshop", buttonText: "Register", onClick: openModalHandler },
    { id: 3, imgSrc: img3, title: "Coding for Robotics Hackathon", date: "November 19-20, 2024, 9:00 AM - 9:00 AM", location: "Physical, 24-hour hackathon", type: "Event Type: Online Lecture", buttonText: "Register", onClick: openModalHandler },
  ];

  const pastEvents = [
    { id: 4, imgSrc: img1, title: "Tech Talks: Future of Robotics", date: "November 5, 2024, 6:00 PM - 8:00 PM", location: "Online Lecture", type: "Event Type: Online Lecture", buttonText: "View media" },
    { id: 5, imgSrc: img2, title: "Tech Talks: Future of Robotics", date: "November 5, 2024, 6:00 PM - 8:00 PM", location: "Online Lecture", type: "Event Type: Online Lecture", buttonText: "View media" },
  ];

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <div className="events-grid">
        {upcomingEvents.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
      <h1>Past Events</h1>
      <div className="events-grid">
        {pastEvents.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
      <Footer />
      <RegistrationModal show={showModal} onClose={closeModalHandler} />
    </div>
  );
}

export default Events;
