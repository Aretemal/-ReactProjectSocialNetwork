const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your React' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
  ],
  dialogs: [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Lena' },
    { id: 4, name: 'Ivan' },
    { id: 5, name: 'Oleg' },
  ],
};
export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, { id: state.messages.length + 1, message: action.newMessageBody }],
      };
    }
    default:
      return state;
  }
};
export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });
