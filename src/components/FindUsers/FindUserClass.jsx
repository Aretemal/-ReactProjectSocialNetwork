import axios from 'axios';
import React from 'react';
import Preloader from '../common/Preloader/Preloader.jsx';
import FindUsers from './FintUsers.jsx';

class FindUsersContainer extends React.Component {
  componentDidMount() {
    const {
      currentPage, pageSize, toggleIsFetching, setUsers, setTotalUsersCount,
    } = this.props;
    toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        toggleIsFetching(false);
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    const {
      pageSize, toggleIsFetching, setUsers, setCurrentPage,
    } = this.props;
    setCurrentPage(pageNumber);
    toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => {
        toggleIsFetching(false);
        setUsers(
          response.data.items,
        );
      });
  };

  render() {
    const {
      follow, unfollow, isFetching, currentPage, pageSize, totalUsersCount, users,
    } = this.props;
    return (
      <>
        {isFetching ? <Preloader />
          : (
            <FindUsers
              totalUsersCount={totalUsersCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChanged={this.onPageChanged}
              users={users}
              unfollow={unfollow}
              follow={follow}
            />
          )}
      </>
    );
  }
}
export default FindUsersContainer;
