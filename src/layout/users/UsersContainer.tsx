import React from 'react';
import { connect } from 'react-redux';
import { DispatchType, StateType } from '../../redux/reduxStore';
import {
   UserType,
   followUserActionCreator,
   setCurrentPageActionCreator,
   setTotalUsersCountActionCreator,
   setUserActionCreator,
   unfollowUserActionCreator,
} from '../../redux/usersReducer';
import { UsersAPIcomponent } from './UsersAPIcomponent';

const mapStateToProps = (state: StateType) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
   };
};

const mapDispatchToProps = (dispatch: DispatchType) => {
   return {
      setUsers: (users: Array<UserType>) => {
         dispatch(setUserActionCreator(users));
      },
      followUser: (userId: number) => {
         dispatch(followUserActionCreator(userId));
      },
      unfollowUser: (userId: number) => {
         dispatch(unfollowUserActionCreator(userId));
      },
      setCurrentPage: (pageNumber: number) => {
         dispatch(setCurrentPageActionCreator(pageNumber));
      },
      setTotalUsersCount: (totalCount: number) => {
         dispatch(setTotalUsersCountActionCreator(totalCount));
      },
   };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIcomponent);
