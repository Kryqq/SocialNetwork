import React from 'react';
import { UserType } from '../../redux/usersReducer';
import styles from './Users.module.scss';

type UsersPropsType = {
   users: Array<UserType>;
   followUser: (userId: number) => void;
   unfollowUser: (userId: number) => void;
   setUsers: (users: Array<UserType>) => void;
};

export const Users = (props: UsersPropsType) => {
   return (
      <div className={styles.usersWrapper}>
         {props.users.map((u: UserType) => (
            <div key={u.id} className={styles.userTable}>
               <div className={styles.userCard}>
                  <img src={u.avatar} alt={'avatar'}></img>
                  <span className={styles.userName}>{u.fullName} </span>
                  {u.followed ? (
                     <button onClick={() => props.unfollowUser(u.id)}>Unfollow</button>
                  ) : (
                     <button onClick={() => props.followUser(u.id)}>Follow</button>
                  )}
               </div>
               <div className={styles.userInfo}>
                  <div>
                     <span>Status: {u.status} </span>
                     <span>{u.location.city}</span>
                     <span>{u.location.country}</span>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};
{
   /* <div key={u.id} className={styles.userTable}>
<div className={styles.user}>
   <img src={u.avatar} alt="avatar"></img>
   <span>{u.fullName} </span>
   {u.followed ? (
	 <button onClick={() => props.unfollowUser(u.id)}>Unfollow</button>
   ) : (
	 <button onClick={() => props.followUser(u.id)}>Follow</button>
   )}
   <div>asd</div>
</div>
</div> */
}
