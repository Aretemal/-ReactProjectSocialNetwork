import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../../api/api.js';

const initialState = {
  isAuth: false,
  token: null,
  authId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleToken: (state, action) => {
      if (state.token) {
        state.token = null;
        state.isAuth = false;
        state.authId = null;
      } else {
        state.token = `Bearer ${action.payload.attributes.token}`;
        state.isAuth = true;
        state.authId = action.payload.id;
      }
    },
  },
});

export const { toggleToken } = authSlice.actions;

export default authSlice.reducer;

export const authentication = createAsyncThunk(
  'auth/login',
  async (data, { dispatch }) => {
    const response = await authAPI.authentication(data);
    dispatch(toggleToken(response.data.data));
  },
);

export const registration = createAsyncThunk(
  'auth/registration',
  async (data, { dispatch }) => {
    const response = await authAPI.registration(data);
    dispatch(toggleToken(response.data.data));
  },
);
