import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  addPost, deleteLike, setLike, getAllComments, sendComment,
} from '../../../store/slices/postSlice';
import MyPosts from './MyPosts';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';

function MyPostsContainer() {
  const {
    posts, comments, senders, selectedPost,
  } = useAppSelector((state) => state.post);
  const { token, authLogin } = useAppSelector((state) => state.auth);
  const { firstName, lastName } = useAppSelector((state) => state.profile.profile);
  const dispatch = useAppDispatch();
  const params = useParams();
  const { t } = useTranslation();
  const onAddPost = (newMessageText: string) => {
    dispatch(addPost({ newMessageText, token }));
  };
  const onSetLike = (id: string) => {
    dispatch(setLike({ id, token }));
  };
  const onSendComment = ({ id, message }: { id: string, message: string }) => {
    dispatch(sendComment({ id, message, token }));
  };
  const onSelectCommentPost = ({ id, postId }: { postId: string, id: string }) => {
    dispatch(getAllComments({ id, postId, token }));
  };
  const onDeleteLike = (id: string) => {
    dispatch(deleteLike({ id, token }));
  };

  return (
    <MyPosts
      t={t}
      senders={senders}
      isAuthProfile={authLogin === params.login}
      onSendComment={onSendComment}
      selectedPost={selectedPost}
      comments={comments}
      onAddPost={onAddPost}
      onSetLike={onSetLike}
      onSelectCommentPost={onSelectCommentPost}
      onDeleteLike={onDeleteLike}
      posts={posts}
      firstName={firstName}
      lastName={lastName}
    />
  );
}
export default MyPostsContainer;
