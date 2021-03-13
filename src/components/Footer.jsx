import React from 'react';
import logo from '../img/logo.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <img src={logo} alt='footer-logo' />
        <p> copyrights &copy; {new Date().getFullYear()}</p>
      </div>
      <div>
        <h6>About Us</h6>
        <a href='#0'>Who We Are</a>
        <a href='#0'>CONTACT US</a>
        <a href='#0'>FAQs</a>
        <a href='#0'>MISSIONS</a>
        <a href='#0'>OTHER COMPANIES</a>
      </div>
      <div>
        <h6>Company</h6>
        <a href='#0'>CARRER</a>
        <a href='#0'>LEGAL</a>
        <a href='#0'>POLICY</a>
        <a href='#0'>PRESS</a>
        <a href='#0'>BLOG</a>
      </div>
      <div>
        <h6>Socials</h6>
        <div className='socials'>
          <a href='#0'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='#0'>
            <i className='fab fa-tumblr'></i>
          </a>
          <a href='#0'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='#0'>
            <i className='fab fa-youtube'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
