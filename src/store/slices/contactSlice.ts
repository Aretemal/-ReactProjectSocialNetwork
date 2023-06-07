import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { IContactState, IUser } from './interfaces/contactInterface';
import { contactAPI } from '../../api/api';

const initialState: IContactState = {
  friends: [],
  subscribers: [],
  subscriptions: [],
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setFriends: (state, action: PayloadAction<IUser[]>) => {
      state.friends = action.payload;
    },
    setSubscribers: (state, action: PayloadAction<IUser[]>) => {
      state.subscribers = action.payload;
    },
    setSubscriptions: (state, action: PayloadAction<IUser[]>) => {
      state.subscriptions = action.payload;
    },
  },
});

export const { setFriends, setSubscribers, setSubscriptions } = contactSlice.actions;

export default contactSlice.reducer;

export const getUsersForProfile = createAsyncThunk<void, { token: string, id: string }, { dispatch: AppDispatch }>(
  'contact/getUsersForProfile',
  async (data, { dispatch }) => {
    let response = await contactAPI.getFriends(data, '4');
    dispatch(setFriends(response.data.data));
    response = await contactAPI.getSubscribers(data, '4');
    dispatch(setSubscribers(response.data.data));
    response = await contactAPI.getSubscriptions(data, '4');
    dispatch(setSubscriptions(response.data.data));
  },
);
