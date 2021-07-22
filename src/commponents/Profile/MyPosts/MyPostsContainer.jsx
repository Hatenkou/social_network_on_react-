import React from 'react'
import { addPostActionCreator, } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      post: state.profilePage.postData,
      newPostText: state.profilePage.newPostText,
   }
};
let mapDispatshToProps = (dispatch) => {
   return {
      addPost: (newPostText) => {
         dispatch(addPostActionCreator(newPostText));
      },
   }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatshToProps)(MyPosts);

export default MyPostsContainer;
/*контейненрна компоненкт яка передая через контекст
стор и диспатч в призинтационую компоненту
const MyPostsContainer = (props) => {



   return (
      <StoreContext.Consumer>{
         (store) => {
            let state = store.getState();
            let addPost = () => {
               store.dispatch(addPostActionCreator());
            };
            let onPostChenge = (text) => {
               let action = updateNewPostTextCreator(text);
               store.dispatch(action);
            };
            return <MyPosts
               updateNewPostText={onPostChenge}
               addPost={addPost}
               post={state.profilePage.postData}
               newPostText={state.profilePage.newPostText}
            />
         }
      }
      </StoreContext.Consumer>
   )
};
*/