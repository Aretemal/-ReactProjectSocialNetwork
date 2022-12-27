import {dialogsReducer} from './Dialogs-reducer.js';
import {profileReducer} from './Profile-reducer.js';
import {sidebarReducer} from './Sidebar-reducer.js';

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 10},
        {id: 2, message: 'You', likeCount: 11},
        {id: 3, message: 'Hi!!!!!!!', likeCount: 1120},
      ],
      newPostText: 'Enter new data...',
    },
    dialogsPage: {
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your React'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
      ],
      dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Lena'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Oleg'},
      ],
      newMessageText: 'Enter new data...',
    },
    sidebar: {},
  },
  _callSubscriber() {
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this.getState().profilePage = profileReducer(this.getState().profilePage, action);
    this.getState().dialogsPage = dialogsReducer(this.getState().dialogsPage, action);
    this.getState().sidebar = sidebarReducer(this.getState().sidebar, action);
    this._callSubscriber(this.getState());
  },
};

window.store = store;
export default store;
