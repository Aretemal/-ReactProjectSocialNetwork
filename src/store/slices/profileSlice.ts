import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { profileAPI } from '../../api/api';
import { IProfile, IUpdateStatus } from './interfaces/profileInterface';
import { AppDispatch } from '../store';

const initialState: IProfile = {
  profile: {
    login: '',
    firstName: '',
    lastName: '',
    status: '',
    email: '',
  },
};
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IProfile>) => {
      state.profile = action.payload.profile;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.profile.status = action.payload;
    },
  },
});
export const { setStatus, setProfile } = profileSlice.actions;
export default profileSlice.reducer;
export const getProfile = createAsyncThunk<void, string, { dispatch: AppDispatch }>(
  'profile/getProfile',
  async (token, { dispatch }) => {
    const response = await profileAPI.getInfoAuthUser(token);
    dispatch(setProfile({ profile: response.data.data.attributes }));
  },
);
export const updateStatus = createAsyncThunk<void, IUpdateStatus, { dispatch: AppDispatch }>(
  'profile/updateStatus',
  async (data, { dispatch }) => {
    const response = await profileAPI.updateStatus(data);
    dispatch(setStatus(response.data.data.attributes.status));
  },
);
