import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../hook/hook';
import {
  deleteLike,
  deletePost,
  getAllComments,
  sendComment,
  setLike, updatePost,
} from '../../../../store/slices/thunks/postsThunks';
import Post from './Post';

interface IPostContainerProps {
  id: string,
  message: string,
  isMeLike: boolean,
  likesCount: number,
  commentCount: string,
  createdAt: string,
}
const PostContainer: React.FC<IPostContainerProps> = ({
  id, message, isMeLike,
  likesCount, commentCount,
  createdAt,
}) => {
  const {
    comments, senders,
  } = useAppSelector((state) => state.post);
  const { selectedPost } = useAppSelector((state) => state.post);
  const { token } = useAppSelector((state) => state.auth);
  const { firstName, lastName } = useAppSelector((state) => state.profile.profile);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [selectedSettingsId, setSelectedSettingsId] = useState(-1);
  const [updatedPostId, setUpdatedPostIdId] = useState(-1);
  const onSetLike = (postsId: string) => {
    dispatch(setLike({ id: postsId, token }));
  };
  const onUpdatePost = ({ postsId, content }:{ postsId: string, content: string }) => {
    if (message !== content) {
      dispatch(updatePost({ id: postsId, token, content }));
    }
  };
  const onSendComment = ({ id: postsId, message: content }: { id: string, message: string }) => {
    dispatch(sendComment({
      id: postsId, message: content, token,
    }));
  };
  const onSelectCommentPost = ({ id: postsId, postId }: { postId: string, id: string }) => {
    dispatch(getAllComments({ id: postsId, postId, token }));
  };
  const onDeleteLike = (postsId: string) => {
    dispatch(deleteLike({ id: postsId, token }));
  };
  const onDeletePost = (postsId: string) => {
    dispatch(deletePost({ id: postsId, token }));
  };
  const onSettings = (postsId: number) => {
    if (+postsId === +selectedSettingsId) {
      setSelectedSettingsId(-1);
    } else {
      setSelectedSettingsId(postsId);
    }
  };
  const onSetUpdatedPostId = (postsId: number) => {
    if (+postsId === +updatedPostId) {
      setUpdatedPostIdId(-1);
    } else {
      setUpdatedPostIdId(postsId);
    }
  };
  return (
    <Post
      t={t}
      onUpdatePost={onUpdatePost}
      onSettings={onSettings}
      onSetUpdatedPostId={onSetUpdatedPostId}
      isUpdatedPost={+updatedPostId === +id}
      isSelectedSettings={+selectedSettingsId === +id}
      senders={senders}
      selectedPost={selectedPost}
      onSelectCommentPost={onSelectCommentPost}
      comments={comments}
      onSetLike={onSetLike}
      onDeleteLike={onDeleteLike}
      firstName={firstName}
      lastName={lastName}
      key={id}
      id={id}
      onDeletePost={onDeletePost}
      onSendComment={onSendComment}
      message={message}
      isMeLike={isMeLike}
      likesCount={likesCount}
      commentCount={commentCount}
      createdAt={createdAt}
    />
  );
};
export default PostContainer;
