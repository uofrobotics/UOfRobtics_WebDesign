import React from 'react';
import '../App';
import { Button } from './Button';
import './Components_css/Land_pg.css';
import newLogo from'../svg/Selection.svg'

function Landpg() {
  return (
   
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
        >
          JOIN
        </Button>    

      </div>
    </div>
  );
}

export default Landpg;
