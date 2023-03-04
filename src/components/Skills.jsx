import React from 'react';
import '../styles/components/Skills.styl';

const SkillsItem = ({ skillsItem = {} }) => {

  const value = Number(skillsItem?.percentage?.substr(0, skillsItem?.percentage?.length - 1));
  return (
    <div className='Skills-item'>
      <h4 className='Skill-item-title'>{`${skillsItem?.name} : ${value}%`}</h4>

    </div>
  );
};
const Skills = ({ skillsInfo = [] }) => {

  return (
    <div className='Skills-container'>
      <h3 className='Skills-title'>SKILLS</h3>
      <SkillsItem skillsItem={skillsInfo[0]} />
      <SkillsItem skillsItem={skillsInfo[1]} />
      <SkillsItem skillsItem={skillsInfo[2]} />
      <SkillsItem skillsItem={skillsInfo[3]} />
      <SkillsItem skillsItem={skillsInfo[4]} />
      <SkillsItem skillsItem={skillsInfo[5]} />
      <SkillsItem skillsItem={skillsInfo[6]} />
    </div>
  );
};

export default Skills;

/*
{
        skillsInfo.map(skill => (
          <SkillsItem key={skill.name} skillsItem={skill} />
        ))
      }
*/
