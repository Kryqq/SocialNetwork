import React from 'react';
import { UserType } from '../../redux/usersReducer';
import axios from 'axios';
import { Users } from './Users';
import { Preloader } from '../components/common/preloader/Preloader';
type UsersPropsType = {
   users: Array<UserType>;
   pageSize: number;
   currentPage: number;
   totalCount: number;
   isFetching: boolean;
   followUser: (userId: number) => void;
   unfollowUser: (userId: number) => void;
   setUsers: (users: Array<UserType>) => void;
   setCurrentPage: (pageNumber: number) => void;
   setTotalUsersCount: (totalCount: number) => void;
   toggleIsFetching: (isFetching: boolean) => void;
};
export class UsersAPIcomponent extends React.Component<UsersPropsType> {
   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
         )
         .then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
   }
   onPageChanged = (pageNumber: number) => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNumber);
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
         });
   };
   render() {
      return (
         <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
               users={this.props.users}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               totalCount={this.props.totalCount}
               followUser={this.props.followUser}
               unfollowUser={this.props.unfollowUser}
            />
         </>
      );
   }
}
