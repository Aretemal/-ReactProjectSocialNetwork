import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/Profile-reducer.js'
import classes from './MyPosts.module.css'
import Post from './Posts/Post.jsx'

const MyPosts = (props) => {
  const postsElements = props.posts
    .map(post => <Post key ={post.likeCount} message={post.message} likesCount={post.likeCount}/>)

  const newPostElement = React.createRef()
  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }
  const onPostChange = () => {
    const text = newPostElement.current.value
    const action = updateNewPostTextActionCreator(text)
    props.dispatch(action)
  }
  return (<div>
        <div className={classes.postsBlock}>npm
            My post
        </div>
        <div className={classes.AddPost}>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}> Add</button>
            </div>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>)
}
export default MyPosts
