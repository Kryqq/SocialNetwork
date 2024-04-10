import { UserType } from '../../redux/usersReducer';
import styles from './Users.module.scss';
import axios from 'axios';
import userPhoto from '../../assets/userPhoto.webp';
import React from 'react';
type UsersPropsType = {
   users: Array<UserType>;
   pageSize: number;
   currentPage: number;
   totalCount: number;
   followUser: (userId: number) => void;
   unfollowUser: (userId: number) => void;
   setUsers: (users: Array<UserType>) => void;
   setCurrentPage: (pageNumber: number) => void;
   setTotalUsersCount: (totalCount: number) => void;
};
export class Users extends React.Component<UsersPropsType> {
   componentDidMount() {
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
         )
         .then((response) => {
            this.props.setUsers(response.data.items);
            console.log(response.data);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
   }
   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber);
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then((response) => {
            this.props.setUsers(response.data.items);
         });
   };
   render() {
      const pagesCount: number = Math.ceil(this.props.totalCount / this.props.pageSize);

      let pages = [];
      for (let i = 1; i <= 10; i++) {
         pages.push(i);
      }

      return (
         <div className={styles.usersWrapper}>
            {pages.map((p, index) => (
               <span
                  onClick={() => this.onPageChanged(p)}
                  key={index}
                  className={this.props.currentPage === p ? styles.selectedPage : ''}
               >
                  {p}
               </span>
            ))}

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
