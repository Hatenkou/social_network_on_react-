import React from 'react'
import './MyPost.css'
import Post from './Post/Post'



const MyPosts = (props) => {

   let postsElements =
      props.post.map(p => <Post message={p.message} like={p.like} />)

   let newPostElemement = React.createRef();

   let onAddPost = () => {
      props.addPost();
   };
   let onPostChenge = () => {
      let text = newPostElemement.current.value;
      props.updateNewPostText(text);

   };

   return (

      <div >
         <div className='content'>
            <div className='status'>
               <h1>My post</h1>
               <input type="text" onChange={onPostChenge} ref={newPostElemement}
                  value={props.newPostText} />
               <div className='button__post'>
                  <button onClick={onAddPost}><p>add post</p></button>
               </div>
            </div>
         </div>
         <div className='posts'>
            {postsElements}
         </div>
      </div>

   )

}
export default MyPosts;