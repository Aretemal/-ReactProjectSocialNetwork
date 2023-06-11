import {
  createSlice, createAsyncThunk, PayloadAction, AnyAction,
} from '@reduxjs/toolkit';
import { authAPI } from '../../api/api';
import {
  AuthInterface,
  IAuthenticationData,
  IRegistrationData, ILRResponse, IError,
} from './interfaces/authInterface';
import { AppDispatch } from '../store';

const initialState: AuthInterface = {
  isAuth: false,
  token: '',
  authLogin: '',
  authId: '',
  errors: [],
};

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
export const authentication = createAsyncThunk<ILRResponse,
  IAuthenticationData,
  { dispatch: AppDispatch, rejectValue: IError[] }
>(
  'auth/login',
  async (data, { rejectWithValue }) => {
    const response = await authAPI.authentication(data);
    if (response.data.errors) {
      return rejectWithValue(response.data.errors);
    }
    return response.data.data;
  },
);

export const registration = createAsyncThunk<ILRResponse, IRegistrationData,
  { dispatch: AppDispatch, rejectValue: IError[] }>(
    'auth/registration',
    async (data, { rejectWithValue }) => {
      const response = await authAPI.registration(data);
      if (response.data.errors) {
        return rejectWithValue(response.data.errors);
      }
      return response.data.data;
    },
  );

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
  extraReducers: (builder) => {
    builder
      .addCase(authentication.pending, (state) => {
        state.errors = [];
      })
      .addCase(registration.pending, (state) => {
        state.errors = [];
      })
      .addCase(authentication.fulfilled, (state, action) => {
        state.token = `Bearer ${action.payload.attributes.token}`;
        state.errors = [];
        state.authId = action.payload.id;
        state.authLogin = action.payload.attributes.login;
        state.isAuth = true;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.token = `Bearer ${action.payload.attributes.token}`;
        state.errors = [];
        state.authId = action.payload.id;
        state.authLogin = action.payload.attributes.login;
        state.isAuth = true;
      })
      .addMatcher(isError, (state, action) => {
        state.errors = action.payload;
      });
  },
});

export const {
  toggleToken, deleteAllError, deleteError, setLogin,
} = authSlice.actions;

export default authSlice.reducer;
