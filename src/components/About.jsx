import React from 'react';
import '../styles/components/About.styl';

const About = ({ cvInfo = {} }) => {
  console.log(cvInfo);
  const { name, profession, address, email, website, phone, avatar } = cvInfo;
  return (
    <div className='About-container'>
      <div className='about-left'>
        <img className='About-img' src={avatar} alt='about-icon' />
      </div>
      <div className='center'>
        <h1 className='About-title'>{name}</h1>
        <h3 className='About-item'>{profession}</h3>
        <div className='About-info'>
          <p className='About-item'>{phone}</p>
          <p className='About-item'>{email}</p>
          <p className='About-item'>{website}</p>
        </div>
        <p className='header-address'>{address}</p>
      </div>
    </div>
  );
};

export default About;
