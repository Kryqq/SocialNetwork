import { UserType } from '../../redux/usersReducer';
import styles from './Users.module.scss';
import axios from 'axios';
import userPhoto from '../../assets/userPhoto.webp';
import React from 'react';
type UsersPropsType = {
   users: Array<UserType>;
   followUser: (userId: number) => void;
   unfollowUser: (userId: number) => void;
   setUsers: (users: Array<UserType>) => void;
};
export class Users extends React.Component<UsersPropsType> {
   constructor(props: UsersPropsType) {
      super(props);

      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
         this.props.setUsers(response.data.items);
      });
   }
   getUsers = () => {};
   render() {
      return (
         <div className={styles.usersWrapper}>
            {this.props.users.map((u: UserType) => (
               <div key={u.id} className={styles.userTable}>
                  <div className={styles.userCard}>
                     <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={'avatar'}></img>
                     <span className={styles.userName}>{u.name} </span>
                     {u.followed ? (
                        <button onClick={() => this.props.unfollowUser(u.id)}>Unfollow</button>
                     ) : (
                        <button onClick={() => this.props.followUser(u.id)}>Follow</button>
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
   }
}
