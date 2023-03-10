/* eslint-disable no-undef */
import {
  authReducer, setToken, logout, registration,
} from '../../redux/auth-reducer';

const state = {
  isAuth: false,
  token: null,
};
describe('Auth reducer : ', () => {
  test('Set token', () => {
    const action = setToken('token');
    const newState = authReducer(state, action);
    expect(newState.token).toBe('token');
    expect(newState.isAuth).toBe(true);
  });
  test('Logout', () => {
    const action = logout();
    const newState = authReducer(state, action);
    expect(newState.token).toBe(null);
    expect(newState.isAuth).toBe(false);
  });
});

