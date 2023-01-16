//  import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  setCurrentPage, setTotalUsersCount,
  setUsers, toggleIsFetching,
  unfollow,
} from '../../redux/FindUsers-reducer';
import FindUsersContainer from './FindUserClass.jsx';

const mapStateToProps = (state) => ({
  users: state.findUsersPage.users,
  pageSize: state.findUsersPage.pageSize,
  totalUsersCount: state.findUsersPage.totalUsersCount,
  currentPage: state.findUsersPage.currentPage,
  isFetching: state.findUsersPage.isFetching,
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(FindUsersContainer);
