import React from 'react';
import '../styles/components/Interest.styl';

const InterestItem = ({ interestItem = '' }) => {

  return (
    <div className='Interest-item'>
      <h4 className='Interest-item-title'>{interestItem}</h4>
    </div>
  );
};

const Interest = ({ interestInfo = [] }) => {
  console.log(interestInfo);
  return (
    <div className='Interest-container'>
      <h3 className='Interest-title'>INTEREST</h3>
      <div className='Interest-items'>
        <InterestItem interestItem={interestInfo ? interestInfo[0] : ''} />
        <InterestItem interestItem={interestInfo ? interestInfo[1] : ''} />
        <InterestItem interestItem={interestInfo ? interestInfo[2] : ''} />
        <InterestItem interestItem={interestInfo ? interestInfo[3] : ''} />
      </div>
    </div>
  );
};

export default Interest;
