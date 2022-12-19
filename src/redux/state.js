const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';



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
        }
    },
    _callSubscriber() {
        console.log('332')
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === ADD_POST){
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }
}

export const addPostActionCreator = () =>  ({type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({type:UPDATE_NEW_POST_TEXT, newText:text,});



window.store = store;
export default store;