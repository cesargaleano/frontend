import React from 'react';
import '../styles/components/Header.styl';
import About from './About';

const Header = () => {
  return (
    <div className='Header-container'>
      <h3 className='Header-title'>
        <About />
      </h3>
      
    </div>
  );
};

export default Header;
