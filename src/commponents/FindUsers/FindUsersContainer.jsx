import React from 'react'
import { connect } from 'react-redux';
import {
   setCurrentPage,
   toggleFollowingProgress,
   getUsers,
   unfollow,
   follow,
   followSuccess,
   unfollowSuccess,
   toggleIsFeching
} from '../../redux/findUsers-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'




class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);

   }

   onPageChenged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFeching(true);
      this.props.getUsers(pageNumber, this.props.pageSize);
   }

   render() {

      return <>

         {this.props.isFetching ?
            <Preloader /> : null}
         <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChenged={this.onPageChenged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
         />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.findUsersPage.users,
      pageSize: state.findUsersPage.pageSize,
      totalUsersCount: state.findUsersPage.totalUsersCount,
      currentPage: state.findUsersPage.currentPage,
      isFetching: state.findUsersPage.isFetching,
      followingInProgress: state.findUsersPage.followingInProgress,
   }
};
/*let mapDispatshToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId));
      },
      unFollow: (userId) => {
         dispatch(unFollowAC(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users));
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber));
      },
      setTotalCount: (totalCount) => {
         dispatch(setUsersTotalCountAC(totalCount));
      },

   };
};*/
const FindUsersContainer = connect(mapStateToProps,
   {
      followSuccess,
      unfollowSuccess,
      follow,
      unfollow,
      setCurrentPage,
      toggleFollowingProgress,
      getUsers,
      toggleIsFeching,
   }
)(UsersContainer);
export default FindUsersContainer;
