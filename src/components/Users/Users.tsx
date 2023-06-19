import React from 'react';
import PaginationContainer from './Pagination/PaginationContainer';
import PeopleContainer from './People/PeopleContainer';
import styles from './Users.module.css';

const Users: React.FC = () => (
  <div className={styles.container}>
    <PeopleContainer />
    <PaginationContainer />
  </div>
);

export default Users;
