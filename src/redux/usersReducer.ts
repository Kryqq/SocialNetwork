import { ActionType } from './store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type UserType = {
   id: number;
   avatar: string;
   followed: boolean;
   fullName: string;
   status: string;
   location: {
      city: string;
      country: string;
   };
};
type usersStateType = {
   users: Array<UserType>;
};

const initialState: usersStateType = {
   users: [
      {
         id: 1,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3C2T99qXhPBAwmdgSk6Uc5CcG85ea99bLBP1W67Rorw&s',
         followed: false,
         fullName: 'Вася',
         status: "Hi! i'am here!!!",
         location: { city: 'Москва', country: 'Россия' },
      },
      {
         id: 2,
         avatar: 'https://i.imgur.com/B4wQENm.png',
         followed: true,
         fullName: 'Петя',
         status: "Hi! i'am here tooo!!!",
         location: { city: 'Питер', country: 'Россия' },
      },
      {
         id: 3,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkm0nHxzF3ZOMCjlMBE7Tzje2JPKvX493QMN_duxL8xg&s',
         followed: false,
         fullName: 'Женя',
         status: "Hi! i'am here!!!",
         location: { city: 'Минск', country: 'Беларусь' },
      },
      {
         id: 4,
         avatar:
            'https://preview.redd.it/i-rendered-a-3d-version-of-the-default-green-discord-v0-0jri55mmvb6a1.png?width=640&crop=smart&auto=webp&s=3dfde767af030266a91ff28f6a13060017a361f7',
         followed: true,
         fullName: 'Лена',
         status: "Hi! i'am here!!!",
         location: { city: 'Тула', country: 'Россия' },
      },
   ],
};

export const usersReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return { ...u, followed: true };
               }
               return u;
            }),
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return { ...u, followed: false };
               }
               return u;
            }),
         };
      case SET_USERS:
         return { ...state, users: [...state.users, ...action.users] };

      default:
         return state;
   }
};

export interface IFOLLOW_USER {
   type: 'FOLLOW';
   userId: number;
}

export interface IUNFOLLOW_USER {
   type: 'UNFOLLOW';
   userId: number;
}
export interface ISET_USERS {
   type: 'SET-USERS';
   users: Array<UserType>;
}

export type followUserActionCreatorType = (userId: number) => IFOLLOW_USER;
export type unfollowUserActionCreatorType = (userId: number) => IUNFOLLOW_USER;
export type setUsersActionCreatorType = (users: Array<UserType>) => ISET_USERS;

export const setUserActionCreator: setUsersActionCreatorType = (users: Array<UserType>) => ({
   type: SET_USERS,
   users: users,
});

export const followUserActionCreator: followUserActionCreatorType = (userId: number) => ({ type: FOLLOW, userId });

export const unfollowUserActionCreator: unfollowUserActionCreatorType = (userId: number) => ({
   type: UNFOLLOW,
   userId: userId,
});
