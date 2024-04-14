import React from 'react';
import userPhoto from '../../assets/userPhoto.webp';
import styles from './Users.module.scss';
import { UserType } from '../../redux/usersReducer';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

type UsersType = {
   totalCount: number;
   pageSize: number;
   currentPage: number;
   users: Array<UserType>;
   followUser: (userId: number) => void;
   unfollowUser: (userId: number) => void;
   onPageChanged: (pageNumber: number) => void;
};

export const Users = (props: UsersType) => {
   const pagesCount: number = Math.ceil(props.totalCount / props.pageSize);

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
                        onClick={() => {
                           axios
                              .delete(
                                 `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,

                                 { withCredentials: true,
							headers: {
								"API-KEY": "8fef2b78-2aab-47e8-b036-0d52e54939f0"
							}

						    }
                              )
                              .then((response) => {
                                 if (response.data.resultCode === 0) {
                                    props.unfollowUser(u.id);
                                 }
                              });
                        }}
                     >
                        Unfollow
                     </button>
                  ) : (
                     <button
                        onClick={() => {
                           axios
                              .post(
                                 `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                 {},
                                 { withCredentials: true }
                              )
                              .then((response) => {
                                 if (response.data.resultCode === 0) {
                                    props.followUser(u.id);
                                 }
                              });
                        }}
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
