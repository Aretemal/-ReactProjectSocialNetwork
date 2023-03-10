import { connect } from 'react-redux';
import {
  addPost,
  getAllPosts,
} from '../../../redux/Profile-reducer';
import MyPostsConnect from './MyPostsConnect.jsx';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
  token: state.auth.token,
});

const MyPostsContainer = connect(mapStateToProps, { getAllPosts, addPost })(MyPostsConnect);
export default MyPostsContainer;
