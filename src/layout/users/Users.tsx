import React from 'react';
import { UserType } from '../../redux/usersReducer';

type UsersPropsType = {
   users: Array<UserType>;
   followUser: (userId: number) => void;
   unfollowUser: (userId: number) => void;
   setUsers: (users: Array<UserType>) => void;
};

export const Users = (props: UsersPropsType) => {
   return (
      <div>
         {props.users.map((u: UserType) => (
            <div>
               <div key={u.id}>{u.fullName}</div>
               {u.followed ? (
                  <button onClick={() => props.unfollowUser(u.id)}>Unfollow</button>
               ) : (
                  <button onClick={() => props.followUser(u.id)}>Follow</button>
               )}
            </div>
         ))}
      </div>
   );
};
