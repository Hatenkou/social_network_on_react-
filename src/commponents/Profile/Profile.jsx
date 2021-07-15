import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer';

import './Profile.css';


const Profile = (props) => {
   return (
      <div >
         <MyPostsContainer className='profile-post post' />
      </div>
   );
}
export default Profile;