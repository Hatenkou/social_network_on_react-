import React from 'react'
import Preloader from '../../common/Preloader/Preloader';
import './ProfileInfo.css'
import ProfileStatus from '../ProfileInfo/ProfileStatus'

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }

   return (
      <div className='info-container'>
         <div className='profile-foto'>
            <img src={props.profile.photos.large} />
         </div>
         <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
         />

      </div>
   );
}
export default ProfileInfo;