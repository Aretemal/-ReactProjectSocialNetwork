import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { profileAPI } from '../../api/api.js';

const initialState = {
  profile: {
    firstName: null,
    lastName: null,
  },
  isFetching: true,
};
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setStatus: (state, action) => {
      state.profile.status = action.payload;
    },
    toggleIsFetching: (state) => {
      state.isFetching = !state.isFetching;
    },
  },
});
export const { setStatus, setProfile } = profileSlice.actions;
export default profileSlice.reducer;
export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (token, { dispatch }) => {
    const response = await profileAPI.getInfoAuthUser(token);
    dispatch(setProfile(response.data.data.attributes));
  },
);
export const updateStatus = createAsyncThunk(
  'profile/updateStatus',
  async (data, { dispatch }) => {
    const response = await profileAPI.updateStatus(data);
    dispatch(setStatus(response.data.data.attributes.status));
  },
);
