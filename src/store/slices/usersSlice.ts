import {
  AnyAction, createAsyncThunk, createSlice,
} from '@reduxjs/toolkit';
import { followAPI, usersAPI } from '../../api/api';
import {
  IDataConnection,
  IRequestUsers,
  IRequestUsersResponse,
  IUsers,
} from './interfaces/usersInterface';
import { AppDispatch } from '../store';
import { IError } from './interfaces/authInterface';

const initialState: IUsers = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  errors: [],
  followingInProgress: [],
};
function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
export const requestUsers = createAsyncThunk<
  IRequestUsersResponse, IRequestUsers, { dispatch: AppDispatch, rejectValue: IError[] }>(
    'users/requestUsers',
    async (data, { rejectWithValue }) => {
      const response = await usersAPI.requestUsers(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      response.data.currentPage = data.currentPage;
      return response.data;
    },
  );
export const follow = createAsyncThunk<
  string,
  IDataConnection,
  { dispatch: AppDispatch, rejectValue: IError[] }>(
    'users/follow',
    async (data, { rejectWithValue }) => {
      const response = await followAPI.follow(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return data.id;
    },
  );
export const approve = createAsyncThunk<string, IDataConnection,
  { dispatch: AppDispatch, rejectValue: IError[] }>(
    'users/approve',
    async (data, { rejectWithValue }) => {
      const response = await followAPI.approve(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return data.id;
    },
  );
export const unfollow = createAsyncThunk<
  string,
  IDataConnection,
  { dispatch: AppDispatch, rejectValue: IError[] }>(
    'users/unfollow',
    async (data, { rejectWithValue }) => {
      const response = await followAPI.unfollow(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return data.id;
    },
  );
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestUsers.pending, (state) => {
        state.errors = [];
      })
      .addCase(follow.pending, (state, action) => {
        state.followingInProgress.push(+action.meta.arg.id);
        state.errors = [];
      })
      .addCase(unfollow.pending, (state, action) => {
        state.followingInProgress.push(+action.meta.arg.id);
        state.errors = [];
      })
      .addCase(approve.pending, (state, action) => {
        state.followingInProgress.push(+action.meta.arg.id);
        state.errors = [];
      })
      .addCase(requestUsers.fulfilled, (state, action) => {
        state.followingInProgress = [];
        state.users = action.payload.data;
        state.totalUsersCount = action.payload.meta.countOfUsers;
        state.currentPage = +action.payload.currentPage;
      })
      .addCase(follow.fulfilled, (state, action) => {
        const user = state.users.find((u) => +u.id === +action.payload);
        if (user) {
          user.attributes.followed = 'unfollow';
          const newArr = state.followingInProgress.filter((u) => +u !== +user.id);
          if (newArr) {
            state.followingInProgress = newArr;
          }
        }
      })
      .addCase(unfollow.fulfilled, (state, action) => {
        const user = state.users.find((u) => +u.id === +action.payload);
        if (user) {
          user.attributes.followed = 'approve';
          const newArr = state.followingInProgress.filter((u) => +u !== +user.id);
          if (newArr) {
            state.followingInProgress = newArr;
          }
        }
      })
      .addCase(approve.fulfilled, (state, action) => {
        const user = state.users.find((u) => +u.id === +action.payload);
        if (user) {
          user.attributes.followed = 'unfollow';
          const newArr = state.followingInProgress.filter((u) => +u !== +user.id);
          if (newArr) {
            state.followingInProgress = newArr;
          }
        }
      })
      .addMatcher(isError, (state, action) => {
        state.errors = action.payload;
      });
  },
});

export default usersSlice.reducer;
