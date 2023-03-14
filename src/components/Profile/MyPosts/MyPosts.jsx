import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './MyPosts.module.css';
import Post from './Posts/Post.jsx';
import SendMessageIcon from '../../../assets/images/icons/SendMessageIconn.png';

const MyPosts = React.memo(({ // eslint-disable-line react/display-name
  posts, addNewPost, ava,
}) => {
  const postsElements = posts
    .map((post) => <Post key={post.id} message={post.content} ava={ava} />);
  return (
    <div className={styles.container}>
      <div className={styles.AddPost}>
        <Formik
          initialValues={{
            newMessageText: '',
          }}
          onSubmit={(values) => {
            addNewPost(values.newMessageText);
          }}
        >
          {() => (
            <Form>
              <Field
                className={styles.field}
                name="newMessageText"
                type="text"
                placeholder="Enter text ..."
              />
              <button
                className={styles.but}
                type="submit"
              >
                <img
                  className={styles.SendMessageIcon}
                  src={SendMessageIcon}
                  alt="SendMessageIcon"
                />
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
});
export default MyPosts;
