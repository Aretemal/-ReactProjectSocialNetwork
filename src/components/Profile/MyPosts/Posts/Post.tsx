import React from 'react';
import { Field, Form, Formik } from 'formik';
import { getDate } from '../../../../utils/getDate';
import styles from './Post.module.css';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';
import { IPostProps } from '../MyPostsInterface';
import MenuIcon from '../../../../assets/images/icons/MenuIcon.png';
import LikeIcon from '../../../../assets/images/icons/LikeIcon.png';
import LikeIconOn from '../../../../assets/images/icons/LikeIconOn.png';
import CommentsIcon from '../../../../assets/images/icons/CommentsIcon.png';
import Comments from './Comments/Comments';
import SendPost from '../../../../assets/images/icons/SendPost.png';
import UpdateForm from './UpdateForm/UpdateForm';

const Post: React.FC<IPostProps> = ({
  message, isMeLike, likesCount, onSelectCommentPost, comments, onUpdatePost, onSetUpdatedPostId,
  firstName, lastName, createdAt, onSetLike, id, onDeleteLike, onDeletePost, isUpdatedPost,
  commentCount, selectedPost, onSendComment, t, senders, onSettings, isSelectedSettings,
}) => (
  <div className={styles.item}>
    <img src={DefaultAva} alt="DefaultAva" className={styles.ava} />
    <span className={styles.name}>
      {`${firstName} ${lastName}`}
    </span>
    <span className={styles.date}>
      {`${getDate(createdAt)}`}
    </span>
    {isUpdatedPost
      ? (
        <UpdateForm
          onUpdatePost={onUpdatePost}
          id={id}
          t={t}
          message={message}
        />
      )
      : (
        <span className={styles.description}>
          {message}
        </span>
      )}
    {isSelectedSettings
      ? (
        <div className={styles.settings}>
          <div className={styles.setitem} onClick={() => onDeletePost(id)}>{t('Delete')}</div>
          <div className={styles.setitem} onClick={() => onSetUpdatedPostId(+id)}>{t('Update')}</div>
        </div>
      ) : null }
    <div className={styles.block} onClick={() => onSettings(+id)}>
      <img alt='menu' src={MenuIcon} className={styles.points} />
    </div>
    <div className={styles.like}>
      {isMeLike
        ? (
          <div onClick={() => onDeleteLike(id)}>
            <img src={LikeIconOn} alt="LikeIconOn" className={styles.likeIcon} />
          </div>
        )
        : (
          <div onClick={() => onSetLike(id)}>
            <img src={LikeIcon} alt="LikeIcon" className={styles.likeIcon} />
          </div>
        )}
      <div className={styles.count}>{likesCount}</div>
    </div>
    <div className={styles.comments}>
      <div onClick={() => onSelectCommentPost({ id, postId: selectedPost })}>
        <img src={CommentsIcon} alt="CommentsIcon" className={styles.com} />
      </div>
      <div className={styles.count}>{commentCount}</div>
    </div>
    {selectedPost === id && <Comments senders={senders} comments={comments} />}
    {selectedPost === id
      && (
      <Formik
        initialValues={{
          message: '',
        }}
        onSubmit={(values, { resetForm }) => {
          onSendComment({ message: values.message, id });
          resetForm();
        }}
      >
        {() => (
          <Form className={styles.form}>
            <img className={styles.avaf} src={DefaultAva} alt="DefaultAva" />
            <Field
              className={styles.field}
              name="message"
              type="textarea"
              as="textarea"
              placeholder={t('Enter text ...')}
            />
            <button
              className={styles.but}
              type="submit"
            >
              <img
                className={styles['send-icon']}
                src={SendPost}
                alt='send'
              />
            </button>
          </Form>
        )}
      </Formik>
      )}
  </div>
);
export default Post;
