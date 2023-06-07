import {
  createAsyncThunk, createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { settingsAPI } from '../../api/api';
import { IChangeLangData, IChangePasswordData, ISettingsInitialState } from './interfaces/settingsInterface';

const initialState: ISettingsInitialState = {
  lang: '',
  isChangePassword: false,
};
const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
    setIsChangePassword: (state, action: PayloadAction<boolean>) => {
      state.isChangePassword = action.payload;
    },
  },
});
export const { setLang, setIsChangePassword } = settingsSlice.actions;

export default settingsSlice.reducer;

export const getLang = createAsyncThunk<void, string, { dispatch: AppDispatch }>(
  'settings/getLang',
  async (data, { dispatch }) => {
    const response = await settingsAPI.getLang(data);
    dispatch(setLang(response.data.data.attributes.language));
  },
);

export const changeLang = createAsyncThunk<void, IChangeLangData, { dispatch: AppDispatch }>(
  'settings/changeLang',
  async (data, { dispatch }) => {
    const response = await settingsAPI.changeLang(data);
    dispatch(setLang(response.data.data.attributes.language));
  },
);
export const changePassword = createAsyncThunk<void, IChangePasswordData, { dispatch: AppDispatch }>(
  'settings/changePassword',
  async (data, { dispatch }) => {
    await settingsAPI.changePassword(data);
    dispatch(setIsChangePassword(true));
  },
);
