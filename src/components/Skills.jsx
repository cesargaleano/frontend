import React from 'react';
import '../styles/components/Skills.styl';

const skillsData= [
  {
    name: 'HTML5',
    percentage: '75%'
  },
  {
    name: 'CSS',
    percentage: '100%'
  },
];


const SkillsItem = ({ skillsData }) => {
  console.log(skillsData);
  
  return (
    <div className='Skills-item'>
      <h4 className='Skill-item-title'>{skillsData.name}</h4>
      <p>0%</p>
      <input type='range' value={Number(skillsData.percentage.substr(0,skillsData.percentage.length-1))} />
      <p>100%</p>
      
      
    </div>
  );
};
const Skills = () => {
  return (
    <div className='Skills-container'>
      <h3 className='Skills-title'>SKILLS</h3>
      <SkillsItem skillsData={skillsData[0]} />
      <SkillsItem skillsData={skillsData[1]} />
      <SkillsItem skillsData={skillsData[1]} />
    </div>
  );
};

export default Skills;
