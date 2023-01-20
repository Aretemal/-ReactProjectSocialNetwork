import React from 'react';
import Preloader from '../common/Preloader/Preloader.jsx';
import FindUsers from './FindUsers.jsx';

class FindUsersContainer extends React.Component {
  componentDidMount() {
    const {
      currentPage, pageSize, getUsers,
    } = this.props;
    getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const {
      pageSize, getUsers,
    } = this.props;
    getUsers(pageNumber, pageSize);
  };

  render() {
    const {
      follow, unfollow, followingInProgress, isFetching, currentPage, pageSize, totalUsersCount, users,
    } = this.props;
    return (
      <div>
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
              followingInProgress={followingInProgress}
            />
          )}
      </div>
    );
  }
}
export default FindUsersContainer;
