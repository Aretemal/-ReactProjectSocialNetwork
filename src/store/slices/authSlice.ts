import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { authAPI } from '../../api/api';
import {
  AuthInterface,
  IAuthenticationData,
  IToken,
  IRegistrationData,
} from './interfaces/authInterface';
import { AppDispatch } from '../store';

const initialState: AuthInterface = {
  isAuth: false,
  token: '',
  authLogin: '',
  authId: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.authLogin = action.payload;
    },
    toggleToken: (state, action: PayloadAction<IToken>) => {
      if (state.token) {
        state.token = '';
        state.isAuth = false;
        state.authId = '';
        state.authLogin = '';
      } else {
        state.token = `Bearer ${action.payload.token}`;
        state.isAuth = true;
        if (action.payload.id) {
          state.authId = action.payload.id;
        }
        if (action.payload.login) {
          state.authLogin = action.payload.login;
        }
      }
    },
  },
});

export const { toggleToken, setLogin } = authSlice.actions;

export default authSlice.reducer;

export const authentication = createAsyncThunk<void, IAuthenticationData, { dispatch: AppDispatch }>(
  'auth/login',
  async (data, { dispatch }) => {
    const response = await authAPI.authentication(data);
    dispatch(toggleToken({
      id: response.data.data.id,
      token: response.data.data.attributes.token,
      login: response.data.data.attributes.login,
    }));
  },
);

export const registration = createAsyncThunk<void, IRegistrationData, { dispatch: AppDispatch }>(
  'auth/registration',
  async (data, { dispatch }) => {
    const response = await authAPI.registration(data);
    dispatch(toggleToken({
      id: response.data.data.id,
      token: response.data.data.attributes.token,
      login: response.data.data.attributes.login,
    }));
  },
);
