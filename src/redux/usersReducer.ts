import { Dispatch } from 'redux';
import { ActionType } from './store';
import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW' as const;
const UNFOLLOW = 'UNFOLLOW' as const;
const SET_USERS = 'SET_USERS' as const;
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE' as const;
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT' as const;
const TOGGLE_FETCHING = 'TOGGLE_FETCHING' as const;
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS' as const;
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
   followingInProgress: Array<number>;
};

const initialState: usersStateType = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [],
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
         return { ...state, isFetching: action.isFetching };
      case TOGGLE_FOLLOWING_PROGRESS:
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter((id) => id !== action.userId),
         };
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
export interface ITOGGLE_FOLLOWING_PROGRESS {
   type: typeof TOGGLE_FOLLOWING_PROGRESS;
   isFetching: boolean;
   userId: number;
}

export type followUserActionCreatorType = (userId: number) => IFOLLOW_USER;
export type unfollowUserActionCreatorType = (userId: number) => IUNFOLLOW_USER;
export type setUsersActionCreatorType = (users: Array<UserType>) => ISET_USERS;
export type setCurrentPageActionCreatorType = (currentPage: number) => ISET_CURRENT_PAGE;
export type setTotalUsersCountType = (totalUsersCount: number) => ISET_TOTAL_USERS_COUNT;
export type setIsFetchingType = (isFetching: boolean) => ISET_IS_FETCHING;
export type toggleFollowingProgressType = (isFetching: boolean, userId: number) => ITOGGLE_FOLLOWING_PROGRESS;

export const setUsers: setUsersActionCreatorType = (users: Array<UserType>) => ({
   type: SET_USERS,
   users,
});

export const followUser: followUserActionCreatorType = (userId: number) => ({ type: FOLLOW, userId });

export const unfollowUser: unfollowUserActionCreatorType = (userId: number) => ({
   type: UNFOLLOW,
   userId,
});

export const setCurrentPage: setCurrentPageActionCreatorType = (currentPage: number) => ({
   type: SET_CURRENT_PAGE,
   currentPage,
});

export const setTotalUsersCount = (totalUsersCount: number) => ({
   type: SET_TOTAL_USERS_COUNT,
   count: totalUsersCount,
});

export const toggleIsFetching = (isFetching: boolean) => ({
   type: TOGGLE_FETCHING,
   isFetching,
});

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
   type: TOGGLE_FOLLOWING_PROGRESS,
   isFetching,
   userId,
});

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
   return (dispatch: Dispatch) => {
      dispatch(toggleIsFetching(true));
      usersAPI.getUsers(currentPage, pageSize).then((data) => {
         dispatch(setCurrentPage(currentPage));
         dispatch(toggleIsFetching(false));
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount));
      });
   };
};

export const followThunkCreator = (id: number) => {
   return (dispatch: Dispatch) => {
      dispatch(toggleFollowingProgress(true, id));
      usersAPI.followUser(id).then((response) => {
         if (response.resultCode === 0) {
            dispatch(followUser(id));
         }
         dispatch(toggleFollowingProgress(false, id));
      });
   };
};

export const unfollowThunkCreator = (id: number) => {
   return (dispatch: Dispatch) => {
      dispatch(toggleFollowingProgress(true, id));
      usersAPI.unfollowUser(id).then((response) => {
         if (response.resultCode === 0) {
            dispatch(unfollowUser(id));
         }
         dispatch(toggleFollowingProgress(false, id));
      });
   };
};
