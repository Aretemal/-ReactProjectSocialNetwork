import { authAPI } from '../api/api.js';

const SET_TOKEN = 'SET-TOKEN';
const DELETE_TOKEN = 'DELETE-TOKEN';

const initialState = {
  isAuth: false,
  token: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
        isAuth: true,
      };
    }
    case DELETE_TOKEN: {
      return {
        ...state,
        token: null,
        isAuth: false,
      };
    }
    default:
      return state;
  }
};
export const setToken = (token) => ({
  type: SET_TOKEN,
  token: `Bearer ${token}`,
});
export const logout = () => ({
  type: DELETE_TOKEN,
});
export const login = (userName, password) => (dispatch) => {
  authAPI.login(userName, password)
    .then((response) => {
      dispatch(setToken(response.data.data.attributes.token));
    });
};
export const registration = (userName, password, firstName, lastName, email) => () => {
  authAPI.registration(userName, password, firstName, lastName, email);
};
