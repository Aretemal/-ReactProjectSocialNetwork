import { ActionReducerMapBuilder, AnyAction } from '@reduxjs/toolkit';
import {
  approve, follow, requestUsers, unfollow,
} from '../thunks/usersThunks';
import { IUsersInitialState } from '../interfaces/usersInterface';

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
const usersExtraReducers = (builder: ActionReducerMapBuilder<IUsersInitialState>) => {
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
};
export default usersExtraReducers;
