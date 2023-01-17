import React from 'react';
import usersAPI from '../../api/api';
import Preloader from '../common/Preloader/Preloader.jsx';
import FindUsers from './FindUsers.jsx';

class FindUsersContainer extends React.Component {
  componentDidMount() {
    const {
      currentPage, pageSize, toggleIsFetching, setUsers, setTotalUsersCount,
    } = this.props;
    toggleIsFetching(true);
    usersAPI.getUsers(currentPage, pageSize).then((response) => {
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
    usersAPI.getUsers(pageNumber, pageSize)
      .then((response) => {
        toggleIsFetching(false);
        setUsers(
          response.data.items,
        );
      });
  };

  render() {
    const {
      follow, unfollow, followingInProgress, toggleIsFollowingProgress, isFetching, currentPage, pageSize, totalUsersCount, users,
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
              toggleIsFollowingProgress={toggleIsFollowingProgress}
              followingInProgress={followingInProgress}
            />
          )}
      </>
    );
  }
}
export default FindUsersContainer;
