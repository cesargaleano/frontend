import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ cvInfo = {} }) => {
  const { Profile } = cvInfo;
  return (
    <div className='Profile-container'>
      <h3 className='Profile-title'>PROFILE</h3>
      <p className='Profile-desc'>{Profile}</p>
    </div>
  );
};

export default Profile;
