import { ActionType } from './store';

const FOLLOW = 'FOLLOW' as const;
const UNFOLLOW = 'UNFOLLOW' as const;
const SET_USERS = 'SET_USERS' as const;
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE' as const;
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT' as const;
const TOGGLE_FETCHING = 'TOGGLE_FETCHING' as const;

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
   isFetching: boolean;
};

const initialState: usersStateType = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
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
      case TOGGLE_FETCHING:
		console.log(action.isFetching);
         return { ...state, isFetching: action.isFetching };

      default:
         return state;
   }
};

export interface IFOLLOW_USER {
   type: typeof FOLLOW;
   userId: number;
}

export interface IUNFOLLOW_USER {
   type: typeof UNFOLLOW;
   userId: number;
}
export interface ISET_USERS {
   type: typeof SET_USERS;
   users: Array<UserType>;
}
export interface ISET_CURRENT_PAGE {
   type: typeof SET_CURRENT_PAGE;
   currentPage: number;
}
export interface ISET_TOTAL_USERS_COUNT {
   type: typeof SET_TOTAL_USERS_COUNT;
   count: number;
}
export interface ISET_IS_FETCHING {
   type: typeof TOGGLE_FETCHING;
   isFetching: boolean;
}

export type followUserActionCreatorType = (userId: number) => IFOLLOW_USER;
export type unfollowUserActionCreatorType = (userId: number) => IUNFOLLOW_USER;
export type setUsersActionCreatorType = (users: Array<UserType>) => ISET_USERS;
export type setCurrentPageActionCreatorType = (currentPage: number) => ISET_CURRENT_PAGE;
export type setTotalUsersCountType = (totalUsersCount: number) => ISET_TOTAL_USERS_COUNT;
export type setIsFetchingType = (isFetching: boolean) => ISET_IS_FETCHING;

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

export const toggleIsFetchingActionCreator = (isFetching: boolean) => ({
   type: TOGGLE_FETCHING,
   isFetching,
});
