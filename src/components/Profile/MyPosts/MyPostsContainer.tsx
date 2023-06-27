import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { addPost } from '../../../store/slices/thunks/postsThunks';
import MyPosts from './MyPosts';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';

function MyPostsContainer() {
  const { posts } = useAppSelector((state) => state.post);
  const { token, authLogin } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const params = useParams();
  const { t } = useTranslation();
  const onAddPost = (newMessageText: string) => {
    dispatch(addPost({ newMessageText, token }));
  };

  return (
    <MyPosts
      t={t}
      isAuthProfile={authLogin === params.login}
      onAddPost={onAddPost}
      posts={posts}
    />
  );
}
export default MyPostsContainer;
