//  import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/Profile-reducer';
import MyPosts from './MyPosts.jsx';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});
const mapDispatchToProps = (dispatch) => ({
  addPost: () => {
    console.log('1');
    dispatch(addPostActionCreator());
  },
  updateNewPostText: (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  },
});
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
