import {
  addPostActionCreator,
  deletePost,
  profileReducer,
} from './Profile-reducer';

const state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 10 },
    { id: 2, message: 'You', likeCount: 11 },
    { id: 3, message: 'Hi!!!!!!!', likeCount: 1120 },
  ],
};
// eslint-disable-next-line no-undef
test('length of post should be incremented', () => {
  // 1. test data
  const action = addPostActionCreator('Hello');

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  // eslint-disable-next-line no-undef
  expect(newState.posts.length).toBe(5);
});
// eslint-disable-next-line no-undef
test('message should be correct', () => {
  // 1. test data
  const action = addPostActionCreator('Hello');
  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  // eslint-disable-next-line no-undef
  expect(newState.posts[4].message).toBe('Hello');
});
// eslint-disable-next-line no-undef
test('after deleting length of messages should be decremented', () => {
  // 1. test data
  const action = deletePost(1);
  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  // eslint-disable-next-line no-undef
  expect(newState.posts.length).toBe(3);
});

// eslint-disable-next-line no-undef
test('after deleting length should be decremented if id is incorrect', () => {
  // 1. test data
  const action = deletePost(1000);
  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  // eslint-disable-next-line no-undef
  expect(newState.posts.length).toBe(4);
});
