import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './slices/authSlice';
import postReducer from './slices/postSlice';
import profileReducer from './slices/profileSlice';
import usersReducer from './slices/usersSlice';
import dialogReducer from './slices/dialogSlice';

const reducers = combineReducers({
  auth: authReducer,
  post: postReducer,
  profile: profileReducer,
  users: usersReducer,
  dialog: dialogReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
