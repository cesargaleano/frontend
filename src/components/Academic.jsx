import React from 'react';
import '../styles/components/Academic.styl';

const AcademicItem = ({ academicItem }) => {
  return (
    <div className='Academic-item'>
      <h4 className='Academic-item-title'>{academicItem?.degree}</h4>
      <p>{academicItem?.description}</p>
      <p>{`${academicItem?.startDate} to ${academicItem?.endDate}`}</p>
      <p>{academicItem?.institution}</p>
    </div>
  );
};

const Academic = ({ academicInfo = [] }) => {
  return (
    <div className='Academic-container'>
      <h3 className='Academic-title'>ACADEMIC</h3>
      <div className='Academic-items'>
        <AcademicItem academicItem={academicInfo ? academicInfo[0] : {}} />
        <AcademicItem academicItem={academicInfo ? academicInfo[1] : {}} />
        <AcademicItem academicItem={academicInfo ? academicInfo[1] : {}} />
      </div>
    </div>
  );
};

export default Academic;
