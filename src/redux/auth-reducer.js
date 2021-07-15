import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FITCHING = 'TOGGLE_IS_FITCHING';
let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
   isFetching: false,

};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
            isAuth: true,
         }
      case TOGGLE_IS_FITCHING:
         return { ...state, isFetching: action.isFetching }
      default:
         return state;

   };
};

export const setAuthUserData = (id, email, login) => {
   return {
      type: SET_USER_DATA,
      data: { id, email, login },
   }
};
export const toggleIsFeching = (isFetching) => {
   return {
      type: TOGGLE_IS_FITCHING,
      isFetching,
   }
};
export const getAuthUserData = () => (dispatch) => {
   authAPI.me()
      .then(response => {
         if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login));
         }
      });
};

export default authReducer;