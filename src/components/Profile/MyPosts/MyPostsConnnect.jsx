import React from 'react';
import Preloader from '../../common/Preloader/Preloader.jsx';
import FindUsers from '../../FindUsers/FindUsers.jsx';

class FindUsersContainer extends React.Component {
  componentDidMount() {
    const {
      currentPage, pageSize, requestUsers,
    } = this.props;
    requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const {
      pageSize, requestUsers,
    } = this.props;
    requestUsers(pageNumber, pageSize);
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
export default FindUsersCo;
