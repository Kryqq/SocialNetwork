import { ActionType } from './store';

const FOLLOW = 'FOLLOW' as const;
const UNFOLLOW = 'UNFOLLOW' as const;
const SET_USERS = 'SET-USERS' as const;
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE' as const;
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT' as const;

export type UserType = {
   name: string;
   id: number;

   uniqueUrlName: string;
   photos: {
      small: string;
      large: string;
   };
   status: null;
   followed: boolean;
};
type usersStateType = {
   users: Array<UserType>;
   totalUsersCount: number;
   pageSize: number;
   currentPage: number;
};

const initialState: usersStateType = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
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
         return { ...state, users: action.users };
      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage };
      case SET_TOTAL_USERS_COUNT:
         return { ...state, totalUsersCount: action.count };

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
export interface ISET_CURRENT_PAGE {
   type: 'SET-CURRENT-PAGE';
   currentPage: number;
}
export interface ISET_TOTAL_USERS_COUNT {
   type: 'SET-TOTAL-USERS-COUNT';
   count: number;
}

export type followUserActionCreatorType = (userId: number) => IFOLLOW_USER;
export type unfollowUserActionCreatorType = (userId: number) => IUNFOLLOW_USER;
export type setUsersActionCreatorType = (users: Array<UserType>) => ISET_USERS;
export type setCurrentPageActionCreatorType = (currentPage: number) => ISET_CURRENT_PAGE;
export type setTotalUsersCount = (totalUsersCount: number) => ISET_TOTAL_USERS_COUNT;

export const setUserActionCreator: setUsersActionCreatorType = (users: Array<UserType>) => ({
   type: SET_USERS,
   users,
});

export const followUserActionCreator: followUserActionCreatorType = (userId: number) => ({ type: FOLLOW, userId });

export const unfollowUserActionCreator: unfollowUserActionCreatorType = (userId: number) => ({
   type: UNFOLLOW,
   userId,
});

export const setCurrentPageActionCreator: setCurrentPageActionCreatorType = (currentPage: number) => ({
   type: SET_CURRENT_PAGE,
   currentPage,
});

export const setTotalUsersCountActionCreator = (totalUsersCount: number) => ({
   type: SET_TOTAL_USERS_COUNT,
   count: totalUsersCount,
});
