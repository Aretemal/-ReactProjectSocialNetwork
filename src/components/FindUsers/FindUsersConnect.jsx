import { connect } from 'react-redux';
import {
  follow, getUsers,
  setCurrentPage, toggleIsFollowingProgress,
  unfollow,
} from '../../redux/FindUsers-reducer';
import FindUsersContainer from './FindUserContainer.jsx';

const mapStateToProps = (state) => ({
  users: state.findUsersPage.users,
  pageSize: state.findUsersPage.pageSize,
  totalUsersCount: state.findUsersPage.totalUsersCount,
  currentPage: state.findUsersPage.currentPage,
  isFetching: state.findUsersPage.isFetching,
  followingInProgress: state.findUsersPage.followingInProgress,
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsers,
})(FindUsersContainer);
