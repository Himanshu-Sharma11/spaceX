import React from 'react';
import astronaut from '../img/astronaut.png';
const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='social-links'>
        <div className='socials'>
          <i className='fab fa-facebook-f'></i>
        </div>
        <div className='socials'>
          <i className='fab fa-tumblr'></i>
        </div>
        <div className='socials'>
          <i className='fab fa-instagram'></i>
        </div>
        <div className='socials'>
          <i className='fab fa-youtube'></i>
        </div>
      </div>
      <div className='main container'>
        <div className='text-section'>
          <p>
            Space Exploration Technologies Corp. trading as SpaceX,is a private
            American aerospace manufacturer headquatered California .
          </p>
          <button>Explore Space</button>
        </div>
        <div className='astronaut'>
          <img src={astronaut} alt='Astronaut ' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
