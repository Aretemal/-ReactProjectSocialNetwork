import { combineReducers, legacy_createStore as createStore } from 'redux'
import {dialogsReducer} from "./Dialogs-reducer.js";
import {findUsersReducer} from "./FindUsers-reducer.js";
import {profileReducer} from "./Profile-reducer.js";
import {sidebarReducer} from "./Sidebar-reducer.js";


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    findUsersPage:findUsersReducer,
});
let store = createStore(reducers);

export default store;