import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
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
  form: formReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
