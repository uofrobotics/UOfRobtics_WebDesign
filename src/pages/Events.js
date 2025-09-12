import React, { useState } from 'react';
import RegistrationModal from '../components/RegistrationModal';
import EventCard from '../components/EventCard';
import MediaViewModal from '../components/MediaViewModal'; // Import the new modal component
import '../components/Components_css/Events.css';
import img1 from '../images/about-img-1.jpg';
import img2 from '../images/about-img-2.jpeg';
import img3 from '../images/about-img-3.jpg';
import vid1 from '../videos/vid1.mp4';
import vid2 from '../videos/vid2.mp4';
import Footer from '../components/Footer';

function Events() {
  const [showModal, setShowModal] = useState(false);
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openMediaModalHandler = (mediaSrc, type) => {
    setSelectedMedia(mediaSrc);
    setMediaType(type);
    setShowMediaModal(true);
  };

  const closeMediaModalHandler = () => {
    setShowMediaModal(false);
    setSelectedMedia(null);
    setMediaType(null);
    const videoElement = document.querySelector(".modal-media");
    if (videoElement && videoElement.tagName === "VIDEO") {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  const upcomingEvents = [
    { id: 1, imgSrc: img1, title: "Friday meetings", date: "Every Friday ", location: "Engineering Lab Building, lavapit", type: "Event Type: Online Lecture/ In-person", buttonText: "Register", onClick: openModalHandler },
    { id: 2, imgSrc: img2, title: "Robot Building Workshop", date: "November 5, 2024, 6:00 PM - 8:00 PM", location: "Engineering Lab Building, lavapit", type: "Event Type: Workshop", buttonText: "Register", onClick: openModalHandler },
    { id: 3, imgSrc: img3, title: "Cosmopolitan", date: "November 19-20, 2024, 9:00 AM - 11:00 AM", location: "In-person", buttonText: "Register", onClick: openModalHandler },
  ];

  const pastEvents = [
    { id: 4, imgSrc: img1, title: "Tech Talks: CosmoPolitan (ended)", date: "February 5, 2024, 6:00 PM - 8:00 PM", location: "In-person", type: "Event Type: Discussion", buttonText: "View media", onClick: () => openMediaModalHandler(vid1, 'video') },
    { id: 5, imgSrc: img2, title: "Competition", date: "May 6, 2022, ", location: "Russia", type: "Competition", buttonText: "View media", onClick: () => openMediaModalHandler(vid2, 'video') },
  ];

  return (
    <>
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <div className="events-grid">
        {upcomingEvents.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
      <h1>Past Event</h1>
      <div className="events-grid">
        {pastEvents.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
     
      <RegistrationModal show={showModal} onClose={closeModalHandler} />
      <MediaViewModal show={showMediaModal} mediaSrc={selectedMedia} mediaType={mediaType} onClose={closeMediaModalHandler} />
      
      
     
    </div>
    <Footer />
    </>
  );
}

export default Events;
