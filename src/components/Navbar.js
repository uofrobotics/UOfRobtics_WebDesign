import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import RegistrationModal from './RegistrationModal';
import './Components_css/Navbar.css';
import banner from '../images/Urobo_Banner31.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);

    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={banner} alt='URobotics logo' className='navbar-logo2-img'></img>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                Events
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle='btn--outline' onClick={openModalHandler}>
              Newsletter
            </Button>
          )}
        </div>
      </nav>
      <RegistrationModal show={showModal} onClose={closeModalHandler} isHomePage={true} />
    </>
  );
}

export default Navbar;
