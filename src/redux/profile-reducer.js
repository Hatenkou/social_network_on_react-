import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATA_NEW_POST_TEXT = 'UPDATA-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
   postData: [
      { id: 1, message: 'hellow word', like: '14' },
      { id: 2, message: 'i love react', like: '18' },
      { id: 3, message: 'learn english', like: '111' },
      { id: 4, message: 'sdfgsxghbwgd', like: '13' },
      { id: 5, message: 'sdfgsxghbwgd', like: '18' },
      { id: 5, message: 'ssdgsxghbwgd', like: '14' },
      { id: 5, message: 'sdfgsxghbwgd', like: '18' },

   ],
   newPostText: 'What do you have in mind?',
   profile: null,
   status: '',
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 1,
            message: state.newPostText,
            like: 0,

         };
         return {
            ...state,
            postData: [...state.postData, newPost],
            newPostText: ' ',
         };

      case UPDATA_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText,
         };
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile,
         };
      case SET_STATUS:
         return {
            ...state,
            status: action.status,
         };
      default:
         return state;

   };
};

export const addPostActionCreator = () => {
   return {
      type: ADD_POST
   }
};
export const setUserProfile = (profile) => {
   return {
      type: SET_USER_PROFILE,
      profile
   }
};
export const updateNewPostTextCreator = (text) => {
   return {
      type: UPDATA_NEW_POST_TEXT, newText: text
   }
};
export const setStatus = (status) => {
   return {
      type: SET_STATUS, status
   }
};
export const getUserProfile = (userId) => (dispatsh) => {
   usersAPI.getProfile(userId).then(response => {
      dispatsh(setUserProfile(response.data));
   });
};
export const getUserStatus = (userId) => (dispatsh) => {
   profileAPI.getStatus(userId).then(response => {
      dispatsh(setStatus(response.data));
   });
};
export const updateStatus = (status) => (dispatsh) => {
   profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
         dispatsh(setStatus(status));
      }
   });
};
export default profileReducer;