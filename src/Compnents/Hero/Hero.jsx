// eslint-disable-next-line no-unused-vars
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';
import profile_img from '../../assets/profile-img.png';
import resume from '../../assets/Resume.pdf';


const Hero = () => {
  return (  
    <div id='Home' className='hero'>
        <img src={profile_img} alt='' className='profileImg'/>
        {/* <h2>Hello !</h2> */}
        <h2><span>I am Tushar Sharma,</span> FrontEnd Developer</h2>
        <h3>Computer Science and Engineering(CS-AIML)</h3>
        <p></p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect with me</AnchorLink></div>
            <div className='hero-resume'><a href={resume} download="Resume.pdf">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero