import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';
import DefaultAva from '../../../assets/images/DefaultAva.webp';
import SendPost from '../../../assets/images/icons/SendPost.png';
import { IMyPostsProps } from './MyPostsInterface';

const MyPosts: React.FC<IMyPostsProps> = ({
  posts, onAddPost, firstName, t, lastName, isAuthProfile,
  onSetLike, onDeleteLike, onSelectCommentPost, comments, selectedPost, onSendComment,
}) => {
  const postsElements = posts
    .map((post) => (
      <Post
        selectedPost={selectedPost}
        onSelectCommentPost={onSelectCommentPost}
        comments={comments}
        onSetLike={onSetLike}
        onDeleteLike={onDeleteLike}
        firstName={firstName}
        lastName={lastName}
        key={post.id}
        id={post.id}
        onSendComment={onSendComment}
        message={post.attributes.content}
        isMeLike={post.attributes.isMeLike}
        likesCount={post.attributes.likesCount}
        commentCount={post.attributes.commentCount}
        createdAt={post.attributes.createdAt}
      />
    )).reverse();
  return (
    <div className={styles.container}>
      {isAuthProfile ? (
        <Formik
          initialValues={{
            newMessageText: '',
          }}
          onSubmit={(values, { resetForm }) => {
            onAddPost(values.newMessageText);
            resetForm();
          }}
        >
          {() => (
            <Form className={styles.form}>
              <img className={styles.ava} src={DefaultAva} alt="DefaultAva" />
              <Field
                className={styles.field}
                name="newMessageText"
                type="textarea"
                as="textarea"
                placeholder={t('Enter text...')}
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
      ) : null}
      <div>
        {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;
