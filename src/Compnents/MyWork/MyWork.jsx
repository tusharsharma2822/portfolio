// eslint-disable-next-line no-unused-vars
import React from 'react';
import './MyWork.css';
import theme_profile from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';


const MyWork = () => {
  return (
    <div className='myWork'>
        <div className='myWorkTitle'>
            <h1>My Works</h1>
            <img src={theme_profile} alt='' />
        </div>
        <div className='myWork-container'>
            {mywork_data.map((work,index) => {
                return <img key={index} src={work.w_img} alt='' className='projectImg'/>
            })}
        </div>
    </div>
  )
}

export default MyWork