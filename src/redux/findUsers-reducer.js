import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FITCHING = 'TOGGLE_IS_FITCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
   users: [],
   pageSize: 15,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: true,
   followingInProgress: [],

};

const findUsersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         }
      case SET_USERS:
         return { ...state, users: action.users }
      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage }
      case SET_USERS_TOTAL_COUNT:
         return { ...state, totalUsersCount: action.count }
      case TOGGLE_IS_FITCHING:
         return { ...state, isFetching: action.isFetching }
      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return {
            ...state, followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id != action.userId)
         }
      default:
         return state;

   };
};

export const followSuccess = (userId) => {
   return {
      type: FOLLOW,
      userId
   }
};
export const unfollowSuccess = (userId) => {
   return {
      type: UNFOLLOW,
      userId
   }
};
export const setUsers = (users) => {
   return {
      type: SET_USERS,
      users
   }
};
export const setCurrentPage = (currentPage) => {
   return {
      type: SET_CURRENT_PAGE,
      currentPage
   }
};
export const setUsersTotalCount = (totalUsersCount) => {
   return {
      type: SET_USERS_TOTAL_COUNT,
      count: totalUsersCount,
   }
};
export const toggleIsFeching = (isFetching) => {
   return {
      type: TOGGLE_IS_FITCHING,
      isFetching,
   }
};
export const toggleFollowingProgress = (isFetching, userId) => {
   return {
      type: TOGGLE_IS_FOLLOWING_PROGRESS,
      isFetching,
      userId,
   }
};

export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(toggleIsFeching(true));
      usersAPI.getUsers(currentPage, pageSize).then(data => {
         dispatch(toggleIsFeching(false));
         dispatch(setUsers(data.items));
         dispatch(setUsersTotalCount(data.totalCount));
      });
   }
};
export const follow = (userId) => {
   return (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      usersAPI.follow(userId)
         .then(response => {
            if (response.data.rusultCode == 0) {
               dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
         });
   }
};
export const unfollow = (userId) => {
   return (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      usersAPI.unfollow(userId)
         .then(response => {
            if (response.data.rusultCode == 0) {
               dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
         });
   }
};

export default findUsersReducer;