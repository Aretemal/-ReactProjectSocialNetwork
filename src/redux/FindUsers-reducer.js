import { followAPI, usersAPI } from '../api/api.js';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const APPROVE = 'APPROVE';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};
export const findUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: 'unfollow' };
          }
          return u;
        }),
      };
    }
    case APPROVE: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: 'unfollow' };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: 'approve' };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state, users: [...action.users],
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state, currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state, totalUsersCount: action.totalUsersCount,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state, isFetching: action.isFetching,
      };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const approveSuccess = (userId) => ({ type: APPROVE, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (currentPage, pageSize, token) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  usersAPI.getUsers(currentPage, pageSize, token).then((response) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.data));
    dispatch(setTotalUsersCount(response.data.meta.countOfUsers));
  });
};
export const follow = (userId, token) => (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  followAPI.follow(userId, token)
    .then(() => {
      dispatch(followSuccess(userId));
      dispatch(toggleIsFollowingProgress(false, userId));
    });
};
export const approve = (userId, token) => (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  followAPI.approve(userId, token)
    .then(() => {
      dispatch(approveSuccess(userId));
      dispatch(toggleIsFollowingProgress(false, userId));
    });
};
export const unfollow = (userId, token) => (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  followAPI.unfollow(userId, token)
    .then(() => {
      dispatch(unfollowSuccess(userId));
      dispatch(toggleIsFollowingProgress(false, userId));
    });
};
