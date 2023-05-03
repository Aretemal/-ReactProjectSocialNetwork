import classnames from 'classnames';
import React from 'react';
import PaginationContainer from './Pagination/PaginationContainer';
import PeopleContainer from './People/PeopleContainer';
import styles from './Users.module.css';

const Users: React.FC = () => (
  <div className={classnames(styles.container, 'd-flex align-items-start flex-column mb-4')}>
    <div className="mb-auto p-2">
      <PeopleContainer />
    </div>
    <div className={classnames('d-flex justify-content-center p-2', styles.pagination)}>
      <PaginationContainer />
    </div>
  </div>
);

export default Users;
