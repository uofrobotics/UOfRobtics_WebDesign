import React, { useState } from 'react';
import '../components/Components_css/App.css';
import { Button } from './Button';
import RegistrationModal from './RegistrationModal';
import './Components_css/Land_pg.css';
import newLogo from '../svg/Selection.svg';

function Landpg() {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <>
      <div
        className='hero-container'
        style={{
          '--hero-background-image': `url(${newLogo})`,
        }}
      >
        <h1>Welcome to URobotics</h1>
        <p>What are you waiting for?</p>

        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={openModalHandler}
          >
            JOIN
          </Button>
        </div>
      </div>
      <RegistrationModal show={showModal} onClose={closeModalHandler} />
    </>
  );
}

export default Landpg;
