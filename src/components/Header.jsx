import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import Stripe from './Stripe';
import Rocket from './Rocket';
import Footer from './Footer';
import './project.css';

const Header = () => {
  return (
    <div className='header'>
      <Navbar />
      <Hero />
      <Stripe />
      <Rocket />
      <Footer />
    </div>
  );
};

export default Header;
