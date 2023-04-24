import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { dialogAPI } from '../../api/api.js';

const initialState = {
  messages: [],
  dialogs: [],
  activeId: null,
};
const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setAllMessages: (state, action) => {
      state.messages = action.payload;
    },
    setAllDialogs: (state, action) => {
      state.dialogs = action.payload;
    },
    setDialogId: (state, action) => {
      state.activeId = action.payload;
    },
  },
});
export const {
  addMessage, setAllMessages, setDialogId, setAllDialogs,
} = dialogSlice.actions;

export default dialogSlice.reducer;

export const sendMessage = createAsyncThunk(
  'dialog/sendMessage',
  async (data, { dispatch }) => {
    const response = await dialogAPI.sendMessage(data);
    dispatch(addMessage(response.data.data));
  },
);
export const getAllMessages = createAsyncThunk(
  'dialog/getAllMessage',
  async (data, { dispatch }) => {
    const response = await dialogAPI.getAllMessages(data);
    dispatch(setAllMessages(response.data.data));
  },
);
export const getAllDialogs = createAsyncThunk(
  'dialog/getAllDialogs',
  async (token, { dispatch }) => {
    const response = await dialogAPI.getAllDialogs(token);
    dispatch(setAllDialogs(response.data.data));
  },
);
