import { connect } from 'react-redux';
import { Users } from './Users';
import { DispatchType, StateType } from '../../redux/reduxStore';
import {
   UserType,
   followUserActionCreator,
   setUserActionCreator,
   unfollowUserActionCreator,
} from '../../redux/usersReducer';
import React from 'react';

const mapStateToProps = (state: StateType) => {
   return {
      users: state.usersPage.users,
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
   };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
