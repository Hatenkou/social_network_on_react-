import React from 'react'
import Preloader from '../../common/Preloader/Preloader';
import './ProfileInfo.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }

   return (
      <div>
         <div className='user'>
            <img src={props.profile.photos.large} />
            <h3>firs name</h3>


         </div>
         <div>
            <ProfileStatus
               status={props.status}
               updateStatus={props.updateStatus}
            />
         </div>
      </div>
   );
}
export default ProfileInfo;