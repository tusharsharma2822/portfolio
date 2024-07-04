// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {

  const [menu,setMenu] = useState("Home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close' />
          <li className='home'> <AnchorLink className='anchor-link' href='#Home'><p onClick={()=>setMenu("Home")}>Home</p></AnchorLink>{menu==="Home"?<img src={underline} alt=''/>: <></>}</li>
          <li className='about'><AnchorLink className='anchor-link' offset={50} href='#About'><p onClick={()=>setMenu("About")}>About Me</p></AnchorLink>{menu==="About"?<img src={underline} alt=''/>: <></>}</li>
          <li className='portfolio'><AnchorLink className='anchor-link' offset={50} href='#Portfolio'><p onClick={()=>setMenu("Portfolio")}>Portfolio</p></AnchorLink>{menu==="Portfolio"?<img src={underline} alt=''/>: <></>}</li>
          <li className='contact'><AnchorLink className='anchor-link' offset={50} href='#Contact'><p onClick={()=>setMenu("Contact")}>Contact</p></AnchorLink>{menu==="Contact"?<img src={underline} alt=''/>: <></>}</li>
        </ul>
        <div className='nav-connect'> 
          <AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect With Me</AnchorLink>
       
        </div>
    </div>
  )
}

export default Navbar