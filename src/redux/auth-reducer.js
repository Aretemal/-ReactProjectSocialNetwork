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
        ...action.data,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USERS_DATA, data: {userId, email, login}});
