import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect.jsx';
import {
  follow, requestUsers,
  setCurrentPage, toggleIsFollowingProgress,
  unfollow,
} from '../../redux/FindUsers-reducer';
import {
  getCurrentPage,
  getFollowingInProgress, getIsFetching,
  getPageSize,
  getTotalUsersCount, getUsers,
} from '../../redux/FindUsers-selectors';
import FindUsersContainer from './FindUserContainer.jsx';

const mapStateToProps = (state) => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
});
export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    requestUsers,
  }),
  withAuthRedirect,
)(FindUsersContainer);
