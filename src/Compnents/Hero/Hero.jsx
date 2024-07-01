// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile-img.png'


const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt='' className='profileImg'/>
        {/* <h2>Hello !</h2> */}
        <h2><span>I am Tushar Sharma,</span> FrontEnd Developer</h2>
        <h3>Computer Science and Engineering(CS-AIML)</h3>
        <p></p>
        <div className='hero-action'>
            <div className='hero-connect'>Connect with me</div>
            <div className='hero-resume'><a href='Tushar.pdf' download="Tushar Sharma.pdf">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero