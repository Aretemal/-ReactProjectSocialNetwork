import { dialogAPI } from '../api/api.js';

const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_ALL_MESSAGE = 'SET-ALL-MESSAGE';
const SET_ALL_DIALOGS = 'SET-ALL-DIALOGS';
const SET_DIALOG_ID = 'SET-DIALOG-ID';

const initialState = {
  messages: [],
  dialogs: [],
  activeId: null,
};
export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    }
    case SET_ALL_MESSAGE: {
      return {
        ...state,
        messages: action.messages,
      };
    }
    case SET_ALL_DIALOGS: {
      return {
        ...state,
        dialogs: action.dialogs,
      };
    }
    case SET_DIALOG_ID: {
      return {
        ...state,
        activeId: action.id,
      };
    }
    default:
      return state;
  }
};
export const addMessageAC = (message) => ({ type: ADD_MESSAGE, message });
export const setAllMessageAC = (messages) => ({ type: SET_ALL_MESSAGE, messages });
export const setAllDialogsAC = (dialogs) => ({ type: SET_ALL_DIALOGS, dialogs });
export const selectDialogsAC = (id) => ({ type: SET_DIALOG_ID, id });

export const selectDialogs = (id) => (dispatch) => {
  dispatch(selectDialogsAC(id));
};
export const sendMessage = (token, id, message) => (dispatch) => {
  dialogAPI.sendMessage(token, id, message)
    .then((response) => {
      dispatch(addMessageAC(response.data.data));
    });
};
export const getAllMessage = (token, id) => (dispatch) => {
  dialogAPI.getAllMessage(token, id)
    .then((response) => {
      dispatch(setAllMessageAC(response.data.data));
    });
};
export const getAllDialogs = (token) => (dispatch) => {
  dialogAPI.getAllDialogs(token)
    .then((response) => {
      dispatch(setAllDialogsAC(response.data.data));
    });
};
