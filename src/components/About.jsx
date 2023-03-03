import React from 'react';
import '../styles/components/About.styl';

const About = () => {
  return (
    <div className='About-container'>
      <div className='about-left'>
        <img className='About-img' src='https://www.marismith.com/wp-content/uploads/2014/07/facebook-profile-blank-face.jpeg' alt='about-icon' />
      </div>
      <div className='center'>
        <h1 className='About-title'>Cesar Augusto Galeano Torres</h1>
        <h3 className='About-item'>Fullstack Developer</h3>
        <div className='About-info'>
          <p className='About-item'>301311125</p>
          <p className='About-item'>tocega@yahoo.es</p>
          <p className='About-item'>www.tocega.com</p>
        </div>
        <p className='header-address'>Calle 22 # 16-07 Arboleda Campestre T5 Apto 435</p>
      </div>
    </div>
  );
};

export default About;
