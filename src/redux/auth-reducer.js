import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

const SET_AUTH_USERS_DATA = 'SET-AUTH-USERS-DATA';

const initialState = {
  usersId: null,
  email: null,
  login: null,
  isAuth: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USERS_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_AUTH_USERS_DATA,
  payload: {
    userId, email, login, isAuth,
  },
});
export const getAuthUserData = () => (dispatch) => authAPI.me()
  .then((response) => {
    if (response.data.resultCode === 0) {
      const { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        const messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error';
        dispatch(stopSubmit('login', { _error: messages }));
      }
    });
};
export const logout = () => (dispatch) => {
  authAPI.logout()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
};
