import React from 'react';
import Preloader from '../common/Preloader/Preloader.jsx';
import FindUsers from './FindUsers.jsx';

class FindUsersContainer extends React.Component {
  componentDidMount() {
    const {
      currentPage, pageSize, requestUsers, token,
    } = this.props;
    requestUsers(currentPage, pageSize, token);
  }

  onPageChanged = (pageNumber) => {
    const {
      pageSize, requestUsers, token,
    } = this.props;
    requestUsers(pageNumber, pageSize, token);
  };

  render() {
    const {
      follow, unfollow, followingInProgress, isFetching, currentPage, pageSize,
      totalUsersCount, users, approve, token, id,
    } = this.props;
    return (
      <div>
        {isFetching ? <Preloader />
          : (
            <FindUsers
              id={id}
              token={token}
              totalUsersCount={totalUsersCount}
              pageSize={pageSize}
              approve={approve}
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
