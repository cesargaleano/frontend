import React from 'react';
import '../styles/components/Header.styl';
import About from './About';

const Header = ({ cvInfo = {} }) => {

  return (
    <div className='Header-container'>
      <h3 className='Header-title'>
        <About cvInfo={cvInfo} />
      </h3>
    </div>
  );
};

export default Header;
