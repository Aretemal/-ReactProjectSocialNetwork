import { combineReducers, legacy_createStore as createStore } from 'redux';
import { authReducer } from './auth-reducer';
import { dialogsReducer } from './Dialogs-reducer';
import { findUsersReducer } from './FindUsers-reducer';
import { profileReducer } from './Profile-reducer';
import sidebarReducer from './Sidebar-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  findUsersPage: findUsersReducer,
  auth: authReducer,
});
const store = createStore(reducers);

export default store;
