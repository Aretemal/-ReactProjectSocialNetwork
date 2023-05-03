import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { followAPI, usersAPI } from '../../api/api';
import {
  IDataConnection, IRequestUsers, IToggleIsFollowingProgress, IUser, IUsers,
} from './interfaces/usersInterface';
import { AppDispatch } from '../store';

const initialState: IUsers = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFollow: (state, action: PayloadAction<string>) => {
      state.users = state.users.map((u) => {
        if (u.id === action.payload) {
          return { ...u, followed: 'unfollow' };
        }
        return u;
      });
    },
    setApprove: (state, action: PayloadAction<string>) => {
      state.users = state.users.map((u) => {
        if (u.id === action.payload) {
          return { ...u, followed: 'unfollow' };
        }
        return u;
      });
    },
    setUnfollow: (state, action: PayloadAction<string>) => {
      state.users = state.users.map((u) => {
        if (u.id === action.payload) {
          return { ...u, followed: 'approve' };
        }
        return u;
      });
    },
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalUsersCount: (state, action: PayloadAction<number>) => {
      state.totalUsersCount = action.payload;
    },
    toggleIsFollowingProgress: (state, action: PayloadAction<IToggleIsFollowingProgress>) => {
      state.followingInProgress = action.payload.isFetching
        ? [...state.followingInProgress, action.payload.id]
        : state.followingInProgress.filter((id) => id !== action.payload.id);
    },
  },
});
export const {
  setUsers,
  setFollow,
  setApprove,
  setUnfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFollowingProgress,
} = usersSlice.actions;

export default usersSlice.reducer;
export const requestUsers = createAsyncThunk<void, IRequestUsers, { dispatch: AppDispatch }>(
  'users/requestUsers',
  async (data, { dispatch }) => {
    const response = await usersAPI.requestUsers(data);
    dispatch(setUsers(response.data.data));
    dispatch(setTotalUsersCount(response.data.meta.countOfUsers));
    dispatch(setCurrentPage(data.currentPage));
  },
);
export const follow = createAsyncThunk<void, IDataConnection, { dispatch: AppDispatch }>(
  'users/follow',
  async (data, { dispatch }) => {
    await followAPI.follow(data);
    dispatch(setFollow(data.id));
    // dispatch(toggleIsFollowingProgress(false, data.id));
  },
);
export const approve = createAsyncThunk<void, IDataConnection, { dispatch: AppDispatch }>(
  'users/approve',
  async (data, { dispatch }) => {
    await followAPI.approve(data);
    dispatch(setApprove(data.id));
    // dispatch(toggleIsFollowingProgress(false, data.id));
  },
);
export const unfollow = createAsyncThunk<void, IDataConnection, { dispatch: AppDispatch }>(
  'users/unfollow',
  async (data, { dispatch }) => {
    await followAPI.unfollow(data);
    dispatch(setUnfollow(data.id));
    // dispatch(toggleIsFollowingProgress(false, data.id));
  },
);
