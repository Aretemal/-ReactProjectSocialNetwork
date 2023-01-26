import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Posts/Post.jsx';

function AddNewPostForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          type="text"
          name="newPostText"
          component='input'
          placeholder='Enter new post'
        />
      </div>
      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
}
const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);
function MyPosts({
  posts, addPost,
}) {
  const postsElements = posts
    .map((post) => <Post key={post.likeCount} message={post.message} likesCount={post.likeCount} />);

  const onAddPost = (e) => {
    addPost(e.newPostText);
  };
  return (
    <div>
      <div className={classes.postsBlock}>
        My post
      </div>
      <div className={classes.AddPost}>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}
export default MyPosts;
