import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../../../store/slices/postSlice.js';
import MyPosts from './MyPosts.jsx';

function MyPostsContainer() {
  const { posts } = useSelector((state) => state.post);
  const { token } = useSelector((state) => state.auth);
  const { firstName, lastName } = useSelector((state) => state.profile.profile);

  const dispatch = useDispatch();
  const onAddPost = (newMessageText) => {
    dispatch(addPost({ newMessageText, token }));
  };

  return (
    <MyPosts
      onAddPost={onAddPost}
      posts={posts}
      firstName={firstName}
      lastName={lastName}
    />
  );
}
export default MyPostsContainer;
