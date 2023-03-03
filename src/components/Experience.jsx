import React from 'react';
import '../styles/components/Experience.styl';


const experience = [
  {
    company: 'PugStar',
    endDate: 'Present',
    jobDescription: 'scratch the furniture. Good now the other hand, too lay on arms while youre using the keyboard.',
    jobTitle: 'Frontend',
    startDate: 'Jan 2020',
  },
];

const ExperienceItem = ({ experience }) => {
  console.log(experience);
  return (
    <div className='Experience-item'>
      <h4 className='Experience-item-title'>{experience.jobTitle}</h4>
      <p><strong>{experience.company}</strong></p>
      <p>{experience.startDate} to {experience.endDate}</p>
      <p>{experience.jobDescription}</p>
      
      
    </div>
  );
};

const Experience = () => {
  return (
    <div className='Experience-container'>
      <h3 className='Experience-title'>EXPERIENCE</h3>
      <div className='Experience-items'>
        <ExperienceItem experience={experience[0]} />
        <ExperienceItem experience={experience[0]} />
      </div>
      <div className='Experience-items'>
        <ExperienceItem experience={experience[0]} />
        
      </div>
    </div>
  );
};

export default Experience;
