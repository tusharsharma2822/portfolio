// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <ul className='nav-menu'>
          <li className='home'>Home</li>
          <li className='about'>About Me</li>
          <li className='portfolio'> Portfolio</li>
          <li className='contact'>Contact</li>
        </ul>
        <div className='nav-connect'> 
          Connect With Me
        </div>
    </div>
  )
}

export default Navbar