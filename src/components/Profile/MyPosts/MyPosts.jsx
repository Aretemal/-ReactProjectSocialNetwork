import React from 'react';
import { Formik, Form, Field } from 'formik';
import classes from './MyPosts.module.css';
import Post from './Posts/Post.jsx';

const MyPosts = React.memo(({ // eslint-disable-line react/display-name
  posts, addNewPost,
}) => {
  const postsElements = posts
    .map((post) => <Post key={post.id} message={post.content} />);
  return (
    <div>
      <div className={classes.postsBlock}>
        My post
      </div>
      <div className={classes.AddPost}>
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
                name="newMessageText"
                type="text"
              />
              <button type="submit">
                Add Post
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
});
export default MyPosts;
