import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state.js";
import classes from "./MyPosts.module.css";
import Post from './Posts/Post.jsx';



const MyPosts = (props) => {
    let postsElements = props.posts
        .map(post => <Post message={post.message} likesCount={post.likeCount}/>)

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
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
                <button onClick={addPost}> Add</button>
            </div>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>)
}
export default MyPosts;