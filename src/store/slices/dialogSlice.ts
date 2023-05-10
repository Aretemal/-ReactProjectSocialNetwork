import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dialogAPI } from '../../api/api';
import {
  IDialogItem,
  IMessageItem,
  IGetAllMessages,
  ISendMessage, IDialog,
} from './interfaces/dialogInterface';
import { AppDispatch } from '../store';
import socket from '../../socket/socket';

const initialState: IDialog = {
  messages: [],
  dialogs: [],
  activeId: '',
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<IMessageItem>) => {
      state.messages.push(action.payload);
    },
    setAllMessages: (state, action: PayloadAction<IMessageItem[]>) => {
      state.messages = action.payload;
    },
    setAllDialogs: (state, action: PayloadAction<IDialogItem[]>) => {
      state.dialogs = action.payload;
    },
    setDialogId: (state, action: PayloadAction<string>) => {
      state.activeId = action.payload;
    },
  },
});
export const {
  addMessage, setAllMessages, setDialogId, setAllDialogs,
} = dialogSlice.actions;

export default dialogSlice.reducer;

export const sendMessage = createAsyncThunk<void, ISendMessage, { dispatch: AppDispatch }>(
  'dialog/sendMessage',
  async (data, { dispatch }) => {
    const response = await dialogAPI.sendMessage(data);
    socket.emit('send message', data);
    dispatch(addMessage(response.data.data));
  },
);
export const getAllMessages = createAsyncThunk<void, IGetAllMessages, { dispatch: AppDispatch }>(
  'dialog/getAllMessage',
  async (data, { dispatch }) => {
    const response = await dialogAPI.getAllMessages(data);
    console.log('join to room');
    socket.emit('join to room', { id: data.id });
    dispatch(setAllMessages(response.data.data));
  },
);
export const getAllDialogs = createAsyncThunk<void, string, { dispatch: AppDispatch }>(
  'dialog/getAllDialogs',
  async (token, { dispatch }) => {
    const response = await dialogAPI.getAllDialogs(token);
    dispatch(setAllDialogs(response.data.data));
  },
);
