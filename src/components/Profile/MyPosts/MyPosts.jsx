import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post.jsx';

function MyPosts({
  posts, addPost, updateNewPostText, newPostText,
}) {
  const postsElements = posts
    .map((post) => <Post key={post.likeCount} message={post.message} likesCount={post.likeCount} />);

  const newPostElement = React.createRef();
  const onAddPost = () => {
    addPost();
  };
  const onPostChange = () => {
    const text = newPostElement.current.value;
    updateNewPostText(text);
  };
  return (
    <div>
      <div className={classes.postsBlock}>
        My post
      </div>
      <div className={classes.AddPost}>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={newPostText}
          />
        </div>
        <div>
          <button type='submit' onClick={onAddPost}> Add</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}
export default MyPosts;
