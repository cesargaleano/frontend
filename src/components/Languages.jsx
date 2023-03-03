import React from 'react';
import '../styles/components/Languages.styl';

const languageData= [
  {
    name: 'Spanish',
    percentage: '75%'
  },
  {
    name: 'English',
    percentage: '100%'
  },
];


const LanguageItem = ({ languageData }) => {
  console.log(languageData);
  
  return (
    <div className='Languages-item'>
      <h4 className='Language-item-title'>{languageData.name}</h4>
      <p>0%</p>
      <input type='range' value={Number(languageData.percentage.substr(0,languageData.percentage.length-1))} />
      <p>100%</p>
      
      
    </div>
  );
};

const Languages = () => {
  return (
    <div className='Languages-container'>
      <h4 className='Languages-title'>LANGUAGES</h4>
      <div className='Languages-items'>
        <LanguageItem languageData={languageData[0]} />
        <LanguageItem languageData={languageData[1]} />
        <LanguageItem languageData={languageData[1]} />
      </div>
    </div>
  );
};

export default Languages;
