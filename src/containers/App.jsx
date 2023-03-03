import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

const App = () => {
  return (
    <div className='general-container'>
      <Header />
      <Profile />
      <Experience />
      <div className='app-item'>
        <Academic />
        <Skills />
      </div>
      <div className='app-item'>
        <Interest />
        <Languages />
      </div>
    </div>
  );
};

export default App;
