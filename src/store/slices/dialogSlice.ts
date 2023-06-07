import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dialogAPI } from '../../api/api';
import {
  IDialogItem,
  IMessageItem,
  IGetAllMessages,
  ISendMessage, IDialog,
  ISetMessage,
} from './interfaces/dialogInterface';
import { AppDispatch } from '../store';

const initialState: IDialog = {
  messages: [],
  dialogs: [],
  senders: [],
  activeId: '',
  usersCount: 0,
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<IMessageItem>) => {
      state.messages.push(action.payload);
    },
    setAllMessages: (state, action: PayloadAction<ISetMessage>) => {
      state.messages = action.payload.data;
      state.senders = action.payload.included;
    },
    setAllDialogs: (state, action: PayloadAction<IDialogItem[]>) => {
      state.dialogs = action.payload;
    },
    setCountUsers: (state, action: PayloadAction<number>) => {
      state.usersCount = action.payload;
    },
    setActiveDialog: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.activeId = action.payload;
      } else {
        state.activeId = '';
      }
    },
  },
});
export const {
  addMessage, setCountUsers, setAllMessages, setActiveDialog, setAllDialogs,
} = dialogSlice.actions;

export default dialogSlice.reducer;

export const sendMessage = createAsyncThunk<void, ISendMessage, { dispatch: AppDispatch }>(
  'dialog/sendMessage',
  async (data) => {
    await dialogAPI.sendMessage({ id: data.id, token: data.token, message: data.message });
  },
);
export const getAllMessages = createAsyncThunk<void, IGetAllMessages, { dispatch: AppDispatch }>(
  'dialog/getAllMessage',
  async (data, { dispatch }) => {
    const response = await dialogAPI.getAllMessages({ token: data.token, id: data.dialogId });
    data.socket.emit('DIALOG:JOIN_DIALOG', { dialogId: data.dialogId, userId: data.userId });
    dispatch(setAllMessages(response.data));
  },
);
export const getAllDialogs = createAsyncThunk<void, string, { dispatch: AppDispatch }>(
  'dialog/getAllDialogs',
  async (token, { dispatch }) => {
    const response = await dialogAPI.getAllDialogs(token);
    dispatch(setAllDialogs(response.data.data));
  },
);
