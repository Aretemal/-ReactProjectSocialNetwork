import classnames from 'classnames';
import React from 'react';
import PaginationContainer from './Pagination/PaginationContainer.jsx';
import PeopleContainer from './People/PeopleContainer.jsx';
import styles from './Users.module.css';

function Users() {
  return (
    <div className={classnames(styles.container, 'd-flex align-items-start flex-column mb-4')}>
      <div className="mb-auto p-2">
        <PeopleContainer />
      </div>
      <div className={classnames('d-flex justify-content-center p-2', styles.pagination)}>
        <PaginationContainer />
      </div>
    </div>
  );
}

export default Users;
