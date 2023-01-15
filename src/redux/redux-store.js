import {combineReducers, legacy_createStore as createStore} from 'redux';
import {authReducer} from './auth-reducer.js';
import {dialogsReducer} from './Dialogs-reducer.js';
import {findUsersReducer} from './FindUsers-reducer.js';
import {profileReducer} from './Profile-reducer.js';
import {sidebarReducer} from './Sidebar-reducer.js';


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  findUsersPage: findUsersReducer,
  auth: authReducer,
});
const store = createStore(reducers);

export default store;
