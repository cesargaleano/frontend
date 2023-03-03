import React from 'react';
import '../styles/components/Interest.styl';

const interestData = [
  'javascript',
  'develop',
  'backend',
  'frontend',
];

const InterestItem = ({ interestData }) => {
  console.log(interestData);
  
  return (
    <div className='Interest-item'>
      <h4 className='Interest-item-title'>{interestData}</h4>
    </div>
  );
};

const Interest = () => {
  return (
    <div className='Interest-container'>
      <h3 className='Interest-title'>INTEREST</h3>
      <div className='Interest-items'>
        <InterestItem interestData={interestData[0]} />
        <InterestItem interestData={interestData[1]} />
        <InterestItem interestData={interestData[2]} />
        <InterestItem interestData={interestData[3]} />
      </div>
    </div>
  );
};

export default Interest;
