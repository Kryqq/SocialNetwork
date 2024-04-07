import { combineReducers, createStore } from 'redux';

import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';
import { usersReducer } from './usersReducer';

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer
});

export const store = createStore(reducers);
export type StateType = ReturnType<typeof reducers>;
export type StoreType = typeof store
export type DispatchType = StoreType['dispatch']
