//  import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/Profile-reducer';
import MyPosts from './MyPosts.jsx';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});
const mapDispatchToProps = (dispatch) => ({
  addPost: (newPostText) => {
    dispatch(addPostActionCreator(newPostText));
  },
});
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
