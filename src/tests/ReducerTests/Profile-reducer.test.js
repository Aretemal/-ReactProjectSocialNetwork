/* eslint-disable no-undef */
import {
  deletePost,
  profileReducer, setAllPosts, setNewPost, setStatus,
} from '../../redux/Profile-reducer';

const state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 10 },
    { id: 2, message: 'You', likeCount: 11 },
    { id: 3, message: 'Hi!!!!!!!', likeCount: 1120 },
  ],
  status: ' ',
};
test('Set new post in store', () => {
  const action = setNewPost('Hello');
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});
test('Delete post in store', () => {
  const action = deletePost(4);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});
test('Set status', () => {
  const action = setStatus('Hello');
  const newState = profileReducer(state, action);
  expect(newState.status).toBe('Hello');
});
test('Set all posts', () => {
  const action = setAllPosts([
    { id: 2, message: 'You', likeCount: 11 },
    { id: 2, message: 'You', likeCount: 11 }]);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});
