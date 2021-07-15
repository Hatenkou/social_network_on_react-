import React from 'react'
import './Post.css'
import UserPhoto from '../../../../assets/images/user_png.png'

const Post = (props) => {
   return (
      <div className='post' >
         <img src={UserPhoto}></img>
         <div className='post__info'>
            <h2>{props.message}{props.id}</h2>
         </div>
      </div>

   );
}
export default Post;