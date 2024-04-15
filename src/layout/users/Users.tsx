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
   onPageChanged: (pageNumber: number) => void;
   toggleFollowingProgress: (isFetching: boolean, userId: number) => void;
   followThunkCreator: (id: number) => void;
   unfollowThunkCreator: (id: number) => void;
};

export const Users = (props: UsersType) => {
   const unfollowUserHandler = (id: number) => {
      props.unfollowThunkCreator(id);
   };
   const followUserHandler = (id: number) => {
      props.followThunkCreator(id);
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
