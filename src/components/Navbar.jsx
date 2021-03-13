import React from 'react';
import './project.css';
import Logo from '../img/logo.png';
import search from '../img/search.png';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <a href='#0'>
          <img src={Logo} alt='logo' />
        </a>
      </div>

      <div className='right-section'>
        <div className='links'>
          <a href='#1' className='active'>
            Home
          </a>
          <a href='#2'>About</a>
          <a href='#3'>Updates</a>
          <a href='#4'>Career</a>
          <a href='#5'>Shop</a>
        </div>
        <div className='search'>
          <img src={search} alt='search' />
          <input type='text' placeholder='search' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
