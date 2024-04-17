import { Dispatch } from 'redux';
import { ActionType } from './store';
import { usersAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA' as const;

export type AuthReducerType = {
   userId: null | number;
   email: null | string;
   login: null | string;
   isAuth: boolean;
};

const initialState: AuthReducerType = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
};

export const authReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
      case SET_USER_DATA:
         return { ...state, ...action.data, isAuth: true };
      default:
         return state;
   }
};

export interface ISET_USER_DATA {
   type: typeof SET_USER_DATA;
   data: AuthReducerType;
}
export type setUserDataActionCreatorType = (data: AuthReducerType) => ISET_USER_DATA;

export const setUserAuthData: setUserDataActionCreatorType = (data: AuthReducerType) => ({
   type: SET_USER_DATA,
   data,
});

export const setUsersAuthThunkCreator = () => {
   return (dispatch: Dispatch) => {
      usersAPI.setUserAuthData().then((response) => {
         if (response.resultCode === 0) {
            dispatch(setUserAuthData(response));
         }
      });
   };
};
