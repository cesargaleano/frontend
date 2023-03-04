import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  const [cvInfo, setCvInfo] = useState({});

  useEffect(() => {
    getData('https://server-platzi-2hwhoct4l-cesargaleano.vercel.app/data').then(data => setCvInfo(data.data));
    //getData('https://server-platzi-2hwhoct4l-cesargaleano.vercel.app/data').then(data => console.log(data));
    
    return (() => console.log(cvInfo));
  }, []);

  return (
    <div className='general-container'>
      <Header cvInfo={cvInfo} />
      <Profile cvInfo={cvInfo} />
      <Experience experienceInfo={cvInfo.experience} />
      <div className='app-item'>
        <Academic academicInfo={cvInfo.Academic} />
        <Skills skillsData={cvInfo.skills} />
      </div>
      <div className='app-item'>
        <Interest interestInfo={cvInfo.interest} />
        <Languages languagesInfo={cvInfo.languages} />
      </div>
    </div>
  );
};

export default App;
