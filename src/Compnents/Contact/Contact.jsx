/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  return (
    <div className='contacts'>
        <div className='contact-title'>
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt='' />
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's Talk</h1>
                <p>Please free to connect</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt=''/><p>tusharsharma2822@gmail.com</p>
                    </div>  
                    <div className='contact-detail'>
                        <img src={call_icon} alt=''/><p>+91 9569539415</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt=''/><p>Kanpur, Uttar Pradesh - 208006</p>
                    </div>
                </div>
            </div>
            <form className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your Name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your Email' name='email'/>
                <label htmlFor=''>Please, type your message</label>
                <textarea name='message' rows="8" placeholder='Enter your message'> </textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact