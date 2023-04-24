import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './slices/authSlice.js';
import postReducer from './slices/postSlice.js';
import profileReducer from './slices/profileSlice.js';
import usersReducer from './slices/usersSlice.js';
import dialogReducer from './slices/dialogSlice.js';

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
