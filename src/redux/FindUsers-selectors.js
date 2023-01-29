// import { createSelector } from 'reselect';

export const getUsers = (state) => state.findUsersPage.users;
/* export const Selector = (state) => getUsers(state).filter((() => true));
export const SelectorSuper = createSelector([getUsers], (users) => {
  users.filter((() => true));
}); */

export const getPageSize = (state) => state.findUsersPage.pageSize;
export const getTotalUsersCount = (state) => state.findUsersPage.totalUsersCount;
export const getCurrentPage = (state) => state.findUsersPage.currentPage;
export const getIsFetching = (state) => state.findUsersPage.isFetching;
export const getFollowingInProgress = (state) => state.findUsersPage.followingInProgress;
