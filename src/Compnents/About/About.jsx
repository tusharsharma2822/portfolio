// eslint-disable-next-line no-unused-vars
import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile-img1.jpg'

const About = () => {
  return (
    <div id='About' className='about-me'>
        <div className='about-title'>
            <h1>
                About Me
            </h1>
            <img src={theme_pattern} alt='' />
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile_img} alt='' className='profile-Img'/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am a high-spirited person with a ability of a quick learning, also a person who is interested in programming and new technologies. I have a pretty number of submissions on a Leetcode. I am a person with an efficient approach indulging in a problem solving and a good communication skill</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill' id='htmlcss'><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
                    <div className='about-skill' id='javascript'><p>Javascript</p><hr style={{width: "50%"}}/></div>
                    <div className='about-skill' id='react'><p>React JS</p><hr style={{width: "50%"}}/></div>
                    <div className='about-skill' id='cpp'><p>C++</p><hr style={{width: "50%"}}/></div>
                </div>
            </div>
        </div>
        {/* <div className='about-achievements'>
            <div className='about-achievement'>

            </div>
        </div> */}
    </div>
  )
}

export default About