import { createSlice } from '@reduxjs/toolkit';
import { IUsersInitialState } from './interfaces/usersInterface';
import usersExtraReducers from './extraReducers/usersExtraReducer';

const initialState: IUsersInitialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  errors: [],
  followingInProgress: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: usersExtraReducers,
});

export default usersSlice.reducer;
