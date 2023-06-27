import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { IAuthInitialState } from './interfaces/authInterface';
import { IError } from './interfaces/allInterfaces';
import authExtraReducers from './extraReducers/authExtraReducer';

const initialState: IAuthInitialState = {
  isAuth: false,
  token: '',
  authLogin: '',
  authId: '',
  errors: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.authLogin = action.payload;
    },
    deleteError: (state, action: PayloadAction<number>) => {
      const array: IError[] = [];
      state.errors.forEach((error, index) => {
        if (!(+index === +action.payload)) {
          array.push(error);
        }
      });
      state.errors = array;
    },
    deleteAllError: (state) => {
      state.errors = [];
    },
    toggleToken: (state) => {
      if (state.token) {
        state.token = '';
        state.isAuth = false;
        state.authId = '';
        state.authLogin = '';
      }
    },
  },
  extraReducers: authExtraReducers,
});

export const {
  toggleToken, deleteAllError, deleteError, setLogin,
} = authSlice.actions;

export default authSlice.reducer;
