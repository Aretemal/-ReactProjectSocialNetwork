import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';
import DefaultAva from '../../../assets/images/DefaultAva.webp';
import SendPost from '../../../assets/images/icons/SendPost.png';
import { IMyPostsProps } from './MyPostsInterface';

const MyPosts: React.FC<IMyPostsProps> = ({
  posts, onAddPost, firstName, lastName,
}) => {
  const postsElements = posts
    .map((post) => (
      <Post
        firstName={firstName}
        lastName={lastName}
        key={post.id}
        message={post.attributes.content}
        createdAt={post.attributes.createdAt}
      />
    )).reverse();
  return (
    <div className={styles.container}>
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
      <div>
        {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;
