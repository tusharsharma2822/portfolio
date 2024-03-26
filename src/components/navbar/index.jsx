import React, { useState } from 'react'
import {FaBars, FaReact} from 'react-icons/fa';
import {Link} from "react-router-dom";
import {HiX} from 'react-icons/hi';
import './styles.scss';

const data = [
    {
        label : 'HOME',
        to : '/'
    },

    {
        label : 'ABOUT',
        to : 'about'
    },

    {
        label : 'RESUME',
        to : '/resume'
    },

    {
        label : 'SKILLS',
        to : '/skills'
    },

    {
        label : 'PORTFOLIO',
        to : '/portfolio'
    },

    {
        label : 'CONTACT',
        to : '/contact'
    }
]
const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };
  return (
    <div>
        <nav className='navbar'>
            <div className='container'>
                <Link to={'/'} className='logo'>
                    <FaReact size={30}/>
                </Link>
            </div>
            <ul className={`menu ${toggleIcon ? 'active' : ''}`}>           
                {
                    data.map((item,key) => (
                        <li className='menuItem'>
                            <Link className='menuItemLinks' to={item.to}> 
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className='nav-icons' onClick={handleToggleIcon}>
                {
                    toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                }
            </div>
        </nav>
    </div>
  )
}

export default Navbar