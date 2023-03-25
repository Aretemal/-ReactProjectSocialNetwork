import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect.jsx';
import {
  follow, requestUsers,
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
  token: state.auth.token,
});
const FindUsersWithRedirect = withAuthRedirect(FindUsersContainer);
export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    requestUsers,
  }),
)(FindUsersWithRedirect);
