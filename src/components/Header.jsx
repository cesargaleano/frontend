import React from 'react';
import '../styles/components/Header.styl';
import About from './About';

const Header = () => {
  return (
    <h3 className='Header-title'>
      <About />
    </h3>
  );
};

export default Header;
