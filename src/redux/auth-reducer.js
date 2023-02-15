import { authAPI } from '../api/api';

const SET_AUTH_USERS_DATA = 'SET-AUTH-USERS-DATA';
const SET_TOKEN = 'SET-TOKEN';

const initialState = {
  usersId: null,
  email: null,
  login: null,
  token: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USERS_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_TOKEN: {
      return {
        ...state,
        ...action.token,
      };
    }
    default:
      return state;
  }
};
export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_AUTH_USERS_DATA,
  payload: {
    userId, email, login, isAuth,
  },
});
export const login = (userName, password) => (dispatch) => {
  authAPI.login(userName, password)
    .then((response) => {
      dispatch(setToken(response.data.token));
    });
};
export const registration = (userName, password, firstName, lastName, email) => () => {
  authAPI.registration(userName, password, firstName, lastName, email);
};
export const logout = () => (dispatch) => {
  authAPI.logout()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
};
