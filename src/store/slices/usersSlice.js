import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { followAPI, usersAPI } from '../../api/api.js';

const initialState = {
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
    setFollow: (state, action) => {
      state.users = state.users.map((u) => {
        if (u.id === action.payload) {
          return { ...u, followed: 'unfollow' };
        }
        return u;
      });
    },
    setApprove: (state, action) => {
      state.users = state.users.map((u) => {
        if (u.id === action.payload) {
          return { ...u, followed: 'unfollow' };
        }
        return u;
      });
    },
    setUnfollow: (state, action) => {
      state.users = state.users.map((u) => {
        if (u.id === action.payload) {
          return { ...u, followed: 'approve' };
        }
        return u;
      });
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalUsersCount: (state, action) => {
      state.totalUsersCount = action.payload;
    },
    toggleIsFetching: (state) => {
      state.isFetching = !state.isFetching;
    },
    toggleIsFollowingProgress: (state, action) => {
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
  toggleIsFetching,
} = usersSlice.actions;

export default usersSlice.reducer;
export const requestUsers = createAsyncThunk(
  'users/requestUsers',
  async (data, { dispatch }) => {
    const response = await usersAPI.requestUsers(data);
    dispatch(setUsers(response.data.data));
    dispatch(setTotalUsersCount(response.data.meta.countOfUsers));
    dispatch(setCurrentPage(data.currentPage));
  },
);
export const follow = createAsyncThunk(
  'users/follow',
  async (data, { dispatch }) => {
    await followAPI.follow(data);
    dispatch(setFollow(data.id));
    // dispatch(toggleIsFollowingProgress(false, data.id));
  },
);
export const approve = createAsyncThunk(
  'users/approve',
  async (data, { dispatch }) => {
    await followAPI.approve(data);
    dispatch(setApprove(data.id));
    // dispatch(toggleIsFollowingProgress(false, data.id));
  },
);
export const unfollow = createAsyncThunk(
  'users/unfollow',
  async (data, { dispatch }) => {
    await followAPI.unfollow(data);
    dispatch(setUnfollow(data.id));
    // dispatch(toggleIsFollowingProgress(false, data.id));
  },
);
