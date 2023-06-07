import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { profileAPI } from '../../api/api';
import { IProfile, IUpdateStatus } from './interfaces/profileInterface';
import { AppDispatch } from '../store';

const initialState: IProfile = {
  id: '',
  profile: {
    login: '',
    firstName: '',
    lastName: '',
    status: '',
    email: '',
    hasConnection: '',
  },
};
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IProfile>) => {
      state.profile = action.payload.profile;
      state.id = action.payload.id;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.profile.status = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setLogin: (state, action: PayloadAction<string>) => {
      state.profile.login = action.payload;
    },
  },
});
export const {
  setStatus, setLogin, setProfile, setId,
} = profileSlice.actions;
export default profileSlice.reducer;
export const getProfile = createAsyncThunk<void, { token: string, id: string }, { dispatch: AppDispatch }>(
  'profile/getProfile',
  async (data, { dispatch }) => {
    const response = await profileAPI.getOne(data);
    dispatch(setProfile({ profile: response.data.data.attributes, id: response.data.data.id }));
  },
);
export const updateStatus = createAsyncThunk<void, IUpdateStatus, { dispatch: AppDispatch }>(
  'profile/updateStatus',
  async (data, { dispatch }) => {
    const response = await profileAPI.updateStatus(data);
    dispatch(setStatus(response.data.data.attributes.status));
  },
);
