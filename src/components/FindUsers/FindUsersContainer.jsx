//  import React from 'react';
// import preloader from '../../assets/images/preloader.svg';
import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader.jsx';
import {
  follow,
  setCurrentPage, setTotalUsersCount,
  setUsers, toggleIsFetching,
  unfollow,
} from '../../redux/FindUsers-reducer';
import FindUsers from './FintUsers.jsx';

class FindUsersContainer extends React.Component {
  componentDidMount() {
    toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        toggleIsFetching(false);
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    setCurrentPage(pageNumber);
    toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        toggleIsFetching(false);
        setUsers(
          response.data.items,
        );
      });
  };

  render() {
    const {
      isFetching, currentPage, pageSize, totalUsersCount, onPageChanged, users,
    } = this.props;
    return (
      <>
        {isFetching ? <Preloader />
          : (
            <FindUsers
              totalUsersCount={totalUsersCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChanged={onPageChanged}
              users={users}
              unfollow={unfollow}
              follow={follow}
            />
          )}
      </>
    );
  }
}
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
