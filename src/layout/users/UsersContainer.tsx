import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { StateType } from '../../redux/reduxStore';
import {
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching,
   toggleFollowingProgress,
   getUsersThunkCreator,
   unfollowThunkCreator,
   followThunkCreator,
} from '../../redux/usersReducer';
import { UsersAPIcomponent } from './UsersAPIcomponent';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';

const mapStateToProps = (state: StateType) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
   };
};

// const mapDispatchToProps = (dispatch: DispatchType) => {
//    return {
//       setUsers: (users: Array<UserType>) => {
//          dispatch(setUserActionCreator(users));
//       },
//       followUser: (userId: number) => {
//          dispatch(followUserActionCreator(userId));
//       },
//       unfollowUser: (userId: number) => {
//          dispatch(unfollowUserActionCreator(userId));
//       },
//       setCurrentPage: (pageNumber: number) => {
//          dispatch(setCurrentPageActionCreator(pageNumber));
//       },
//       setTotalUsersCount: (totalCount: number) => {
//          dispatch(setTotalUsersCountActionCreator(totalCount));
//       },
//       toggleIsFetching: (isFetching: boolean) => {
//          dispatch(toggleIsFetchingActionCreator(isFetching));
//       },
//    };
// };

// export const UsersContainer = connect(mapStateToProps, {
//    setCurrentPage,
//    setTotalUsersCount,
//    toggleIsFetching,
//    toggleFollowingProgress,
//    getUsersThunkCreator,
//    unfollowThunkCreator,
//    followThunkCreator,
// })(UsersAPIcomponent);

export const UsersContainer = compose<ComponentType>(
   WithAuthRedirect,

   connect(mapStateToProps, {
      setCurrentPage,
      setTotalUsersCount,
      toggleIsFetching,
      toggleFollowingProgress,
      getUsersThunkCreator,
      unfollowThunkCreator,
      followThunkCreator,
   })
)(UsersAPIcomponent);
