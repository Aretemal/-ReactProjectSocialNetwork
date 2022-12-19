const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: '10'},
                {id: 2, message: 'You', likeCount: '11'},
                {id: 3, message: 'Hi!!!!!!!', likeCount: '1120'},
            ],
            newPostText: 'Enter new data...',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your React'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Lena'},
                {id: 4, name: 'Ivan'},
                {id: 5, name: 'Oleg'}
            ],
            newMessageText: 'Enter new data...',
        }
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: this.getState().profilePage.posts.length + 1,
                message: this.getState().profilePage.newPostText,
                likeCount: 0,
            };
            this.getState().profilePage.posts.push(newPost);
            this.getState().profilePage.newPostText = '';
            this._callSubscriber(this.getState());


        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this.getState().profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());


        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: this.getState().dialogsPage.messages.length + 1,
                message: this.getState().dialogsPage.newMessageText,
            };
            this.getState().dialogsPage.messages.push(newMessage);
            this.getState().dialogsPage.newMessageText = '';
            this._callSubscriber(this.getState());
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this.getState().dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this.getState());
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text,});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text,});


window.store = store;
export default store;