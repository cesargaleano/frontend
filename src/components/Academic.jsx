import React from 'react';
import '../styles/components/Academic.styl';


const dataAcademic = [
  {
    degree: 'Atomic Master',
    description: 'I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms',
    endDate: 'Jan 2017',
    institution: 'MIT',
    startDate: 'Jan 2018',
  },
  {
    degree: 'Space Engineering',
    description: 'Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ',
    endDate: 'Decenber 2015',
    institution: 'Harvard',
    startDate: 'Jan 2017'
  }
];

const AcademicItem = ({ academicInfo }) => {
  console.log(academicInfo);
  return (
    <div className='Academic-item'>
      <h4 className='Academic-item-title'>{academicInfo.degree}</h4>
      <p>{academicInfo.description}</p>
      <p>{academicInfo.startDate} to {academicInfo.endDate}</p>
      <p>{academicInfo.institution}</p>
    </div>
  );
};

const Academic = () => {
  return (
    <div className='Academic-container'>
      <h3 className='Academic-title'>ACADEMIC</h3>
      <div className='Academic-items'>
        <AcademicItem academicInfo={dataAcademic[0]} />
        <AcademicItem academicInfo={dataAcademic[1]} />
        <AcademicItem academicInfo={dataAcademic[1]} />
      </div>
    </div>
  );
};

export default Academic;
