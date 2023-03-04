import React from 'react';
import '../styles/components/Languages.styl';

const LanguageItem = ({ languageItem = {} }) => {
  console.log(languageItem);
  const value = Number(languageItem?.percentage?.substr(0, languageItem.percentage.length - 1));
  return (
    <div className='Languages-item'>
      <h4 className='Language-item-title'>{`${languageItem?.name} : ${value}% `}</h4>
    </div>
  );
};

const Languages = ({ languagesInfo = [] }) => {
  console.log(languagesInfo);
  return (
    <div className='Languages-container'>
      <h3 className='Languages-title'>LANGUAGES</h3>
      <div className='Languages-items'>
        <LanguageItem languageItem={languagesInfo[0] ? languagesInfo[0] : []} />
        <LanguageItem languageItem={languagesInfo[1] ? languagesInfo[1] : []} />
        <LanguageItem languageItem={languagesInfo[1] ? languagesInfo[1] : []} />
      </div>
    </div>
  );
};

export default Languages;
