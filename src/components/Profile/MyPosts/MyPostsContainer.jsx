import { connect } from 'react-redux';
import {
  addPost,
  getAllPosts,
} from '../../../redux/Profile-reducer';
import MyPosts from './MyPosts.jsx';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
  token: state.auth.token,
});

const MyPostsContainer = connect(mapStateToProps, { getAllPosts, addPost })(MyPosts);
export default MyPostsContainer;
