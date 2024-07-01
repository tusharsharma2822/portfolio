// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Compnents/Navbar/Navbar';
import Hero from './Compnents/Hero/Hero';
import About from './Compnents/About/About';
import Portfolio from './Compnents/Portfolio/Portfolio';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Portfolio />
    </div>
  )
}

export default App