import React from 'react';
import '../styles/components/Experience.styl';

const ExperienceItem = ({ experienceItem = {} }) => {

  return (
    <div className='Experience-item'>
      <h4 className='Experience-item-title'>{experienceItem?.jobTitle}</h4>
      <p><strong>{experienceItem?.company}</strong></p>
      <p>{`${experienceItem?.startDate} to ${experienceItem?.endDate}`}</p>
      <p>{experienceItem?.jobDescription}</p>

    </div>
  );
};

const Experience = ({ experienceInfo = [] }) => {
  return (
    <div className='Experience-container'>
      <h3 className='Experience-title'>EXPERIENCE</h3>
      <div className='Experience-items'>
        <ExperienceItem experienceItem={experienceInfo ? experienceInfo[0] : {}} />
        <ExperienceItem experienceItem={experienceInfo ? experienceInfo[0] : {}} />
      </div>
      <div className='Experience-items'>
        <ExperienceItem experienceItem={experienceInfo ? experienceInfo[0] : {}} />
      </div>
    </div>
  );
};

export default Experience;
