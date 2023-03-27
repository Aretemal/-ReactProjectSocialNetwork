import { profileAPI, usersAPI } from '../api/api.js';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_ALL_POST = 'SET-ALL-POST';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SET_USER_INFO = 'SET-USER-INFO';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = {
  posts: [],
  profile: null,
  status: ' ',
  infoAuthUser: null,
  login: null,
  ava: null,
  isFetching: true,
};
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      return {
        ...state,
        infoAuthUser: action.infoAuthUser,
        ava: action.infoAuthUser.ava,
        login: action.infoAuthUser.login,
      };
    }
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, { id: state.posts.length + 1, content: action.newPostText, likeCount: 0 }],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_ALL_POST: {
      return {
        ...state,
        posts: action.posts,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state, isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
};

export const setNewPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setAllPosts = (posts) => ({ type: SET_ALL_POST, posts });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setInfoAuthUser = (infoAuthUser) => ({ type: SET_USER_INFO, infoAuthUser });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const getInfoAuthUser = (token) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  profileAPI.getInfoAuthUser(token)
    .then((response) => {
      dispatch(toggleIsFetching(false));
      dispatch(setInfoAuthUser(response.data.data.attributes));
    });
};
export const addPost = (newMessageText, token) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  profileAPI.addPost(newMessageText, token)
    .then(() => {
      dispatch(toggleIsFetching(false));
      dispatch(setNewPost(newMessageText));
    });
};
export const getAllPosts = (token) => (dispatch) => {
  profileAPI.getAllPosts(token)
    .then((response) => {
      dispatch(setAllPosts(response.data.data));
    });
};
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
    .then((response) => {
      dispatch(setUserProfile(response.data.data.attributes));
    });
};
export const updateStatus = (status, token) => (dispatch) => {
  profileAPI.updateStatus(status, token)
    .then((response) => {
      dispatch(setStatus(response.data.data.attributes.status));
    });
};
