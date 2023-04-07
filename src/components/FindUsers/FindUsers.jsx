import classnames from 'classnames';
import React from 'react';
import { PaginationBootstrap } from './Pagination/PaginationBootstrap.jsx';
import { People } from './People/People.jsx';
import styles from './FindUsers.module.css';

function FindUsers({
  totalUsersCount, followingInProgress, pageSize, currentPage, onPageChanged, users, unfollow, follow, token, approve, id,
}) {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  return (
    <div className={classnames(styles.container, 'd-flex align-items-start flex-column mb-4')}>
      <div className="mb-auto p-2">
        <People
          userId={id}
          token={token}
          approve={approve}
          followingInProgress={followingInProgress}
          users={users}
          unfollow={unfollow}
          follow={follow}
        />
      </div>
      <div className={classnames('d-flex justify-content-center p-2', styles.pagination)}>
        <PaginationBootstrap
          onPageChanged={onPageChanged}
          currentItem={currentPage}
          pagesCount={pagesCount}
        />
      </div>
    </div>
  );
}

export default FindUsers;
