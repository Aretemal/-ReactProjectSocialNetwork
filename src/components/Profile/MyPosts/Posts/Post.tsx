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

const Post: React.FC<IPostProps> = ({
  message, isMeLike, likesCount, onSelectCommentPost, comments,
  firstName, lastName, createdAt, onSetLike, id, onDeleteLike,
  commentCount, selectedPost, onSendComment,
}) => (
  <div className={styles.item}>
    <img src={DefaultAva} alt="DefaultAva" className={styles.ava} />
    <span className={styles.name}>
      {`${firstName} ${lastName}`}
    </span>
    <span className={styles.date}>
      {`${getDate(createdAt)}`}
    </span>
    <span className={styles.description}>
      {message}
    </span>
    <img alt='menu' src={MenuIcon} className={styles.points} />
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
      <div onClick={() => onSelectCommentPost(id)}>
        <img src={CommentsIcon} alt="CommentsIcon" />
      </div>
      <div className={styles.count}>{commentCount}</div>
    </div>
    {selectedPost === id && <Comments comments={comments} />}
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
              placeholder="Enter text..."
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
