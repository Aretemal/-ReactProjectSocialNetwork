import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Posts/Post.jsx'

const MyPosts = (props) => {

  const postsElements = props.posts
    .map(post => <Post key ={post.likeCount} message={post.message} likesCount={post.likeCount}/>)

  let newPostElement = React.createRef()
  const onAddPost = () => {
     props.addPost();
  }
  const onPostChange = () => {
    let text = newPostElement.current.value;
      props.updateNewPostText(text);

  }
  return (<div>
        <div className={classes.postsBlock}>
            My post
        </div>
        <div className={classes.AddPost}>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}> Add</button>
            </div>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>)
}
export default MyPosts
