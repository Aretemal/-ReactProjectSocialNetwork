import usersAPI, { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 10 },
    { id: 2, message: 'You', likeCount: 11 },
    { id: 3, message: 'Hi!!!!!!!', likeCount: 1120 },
  ],
  profile: null,
  status: ' ',
};
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, { id: state.posts.length + 1, message: action.newPostText, likeCount: 0 }],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
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
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
    .then((response) => {
      dispatch(setUserProfile(response.data));
    });
};
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then((response) => {
      dispatch(setStatus(response.data));
    });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
};
