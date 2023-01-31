import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  maxLengthCreator,
  required,
} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls.jsx';
import classes from './MyPosts.module.css';
import Post from './Posts/Post.jsx';

const maxLength30 = maxLengthCreator(30);
function AddNewPostForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          type="text"
          name="newPostText"
          component={Textarea}
          placeholder='Enter new post'
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
}
const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);
const MyPosts = React.memo(({ // eslint-disable-line react/display-name
  posts, addPost,
}) => {
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
});
export default MyPosts;
