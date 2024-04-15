import React from 'react';
import { UserType } from '../../redux/usersReducer';
import { Users } from './Users';
import { Preloader } from '../components/common/preloader/Preloader';

type UsersPropsType = {
   users: Array<UserType>;
   pageSize: number;
   currentPage: number;
   totalCount: number;
   isFetching: boolean;
   followingInProgress: Array<number>;

   setCurrentPage: (pageNumber: number) => void;
   setTotalUsersCount: (totalCount: number) => void;
   toggleIsFetching: (isFetching: boolean) => void;
   toggleFollowingProgress: (isFetching: boolean, userId: number) => void;
   getUsersThunkCreator: (currentPage: number, pageSize: number) => void;
   followThunkCreator: (id: number) => void;
   unfollowThunkCreator: (id: number) => void;
};
export class UsersAPIcomponent extends React.Component<UsersPropsType> {
   componentDidMount() {
      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
      //  this.props.toggleIsFetching(true);
      //  usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      //     this.props.toggleIsFetching(false);
      //     this.props.setUsers(data.items);
      //     this.props.setTotalUsersCount(data.totalCount);
      //  });
   }

   onPageChanged = (pageNumber: number) => {
      this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
      //  this.props.toggleIsFetching(true);
      //  this.props.setCurrentPage(pageNumber);
      //  usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      //     this.props.toggleIsFetching(false);
      //     this.props.setUsers(data.items);
      //  });
   };
   render() {
      return (
         <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
               users={this.props.users}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               totalCount={this.props.totalCount}
               followingInProgress={this.props.followingInProgress}
               onPageChanged={this.onPageChanged}
               toggleFollowingProgress={this.props.toggleFollowingProgress}
               followThunkCreator={this.props.followThunkCreator}
               unfollowThunkCreator={this.props.unfollowThunkCreator}
            />
         </>
      );
   }
}
