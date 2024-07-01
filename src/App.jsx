// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Compnents/Navbar/Navbar';
import Hero from './Compnents/Hero/Hero';
import About from './Compnents/About/About';
import MyWork from './Compnents/MyWork/MyWork';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <MyWork />
    </div>
  )
}

export default App