const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState ={
    posts: [
  { id: 1, message: 'Hi, how are you?', likeCount: 10 },
  { id: 2, message: 'You', likeCount: 11 },
  { id: 3, message: 'Hi!!!!!!!', likeCount: 1120 }
],
    newPostText: 'Enter new data...'
}
export const profileReducer = (state = initialState, action) => {
  let newPost = {}
  switch (action.type) {
    case ADD_POST:
      newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likeCount: 0
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })
