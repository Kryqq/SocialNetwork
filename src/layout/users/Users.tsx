import React from 'react';
import userPhoto from '../../assets/userPhoto.webp';
import styles from './Users.module.scss';
import { UserType } from '../../redux/usersReducer';
import { NavLink } from 'react-router-dom';

import { usersAPI } from '../../api/api';

type UsersType = {
   totalCount: number;
   pageSize: number;
   currentPage: number;
   users: Array<UserType>;
   followingInProgress: Array<number>;
   followUser: (userId: number) => void;
   unfollowUser: (userId: number) => void;
   onPageChanged: (pageNumber: number) => void;
   toggleFollowingProgress: (isFetching: boolean, userId: number) => void;
};

export const Users = (props: UsersType) => {
   const pagesCount: number = Math.ceil(props.totalCount / props.pageSize);
   const unfollowUserHandler = (id: number) => {
      props.toggleFollowingProgress(true, id);
      usersAPI.unfollowUser(id).then((response) => {
         if (response.resultCode === 0) {
            props.unfollowUser(id);
         }
         props.toggleFollowingProgress(false, id);
      });
   };
   const followUserHandler = (id: number) => {
      props.toggleFollowingProgress(true, id);
      usersAPI.followUser(id).then((response) => {
         if (response.resultCode === 0) {
            props.followUser(id);
         }
         props.toggleFollowingProgress(false, id);
      });
   };

   let pages = [];
   for (let i = 1; i <= 10; i++) {
      pages.push(i);
   }
   return (
      <div className={styles.usersWrapper}>
         {pages.map((p, index) => (
            <span
               onClick={() => props.onPageChanged(p)}
               key={index}
               className={props.currentPage === p ? styles.selectedPage : ''}
            >
               {p}
            </span>
         ))}

         {props.users.map((u: UserType) => (
            <div key={u.id} className={styles.userTable}>
               <div className={styles.userCard}>
                  <NavLink to={'/profile/' + u.id}>
                     <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={'avatar'}></img>
                  </NavLink>
                  <span className={styles.userName}>{u.name} </span>
                  {u.followed ? (
                     <button
                        disabled={props.followingInProgress.some((id) => id === u.id)}
                        onClick={() => {
                           unfollowUserHandler(u.id);
                        }}
                     >
                        Unfollow
                     </button>
                  ) : (
                     <button
                        disabled={props.followingInProgress.some((id) => id === u.id)}
                        onClick={() => followUserHandler(u.id)}
                     >
                        Follow
                     </button>
                  )}
               </div>
               <div className={styles.userInfo}>
                  <div>
                     <span>Status: {u.status} </span>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};
