import React from 'react';
import { addPost } from '../../../store/slices/postSlice';
import MyPosts from './MyPosts';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';

function MyPostsContainer() {
  const { posts } = useAppSelector((state) => state.post);
  const { token } = useAppSelector((state) => state.auth);
  const { firstName, lastName } = useAppSelector((state) => state.profile.profile);
  const dispatch = useAppDispatch();
  const onAddPost = (newMessageText: string) => {
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
