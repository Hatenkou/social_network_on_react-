import React from 'react'
import './MyPost.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form';


const MyPosts = (props) => {

   let postsElements =
      props.post.map(p => <Post message={p.message} like={p.like} />)

   let onAddPost = (values) => {
      props.addPost(values.newPostText);
   };

   return (
      <div >
         <div className='content'>
            <div className='status'>
               <h2>My post</h2>
               <AddNewPostReduxForm omSubmit={onAddPost} />
            </div>
         </div>
         <div className='posts'>
            {postsElements}
         </div>
      </div>
   )

}

let AddNewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} >
         <div>
            <Field
               name="newPostText"
               component="textarea"
            />
         </div>
         <div className='button__post'>
            <button ><p>add post</p></button>
         </div>
      </form>
   )
}
let AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);
export default MyPosts;