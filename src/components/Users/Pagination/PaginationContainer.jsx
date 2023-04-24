import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestUsers } from '../../../store/slices/usersSlice.js';
import { Pagination } from './Pagination.jsx';

function PaginationContainer() {
  const {
    pageSize, totalUsersCount, currentPage,
  } = useSelector((state) => state.users);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const onPageChanged = (pageNumber) => {
    dispatch(requestUsers({ currentPage: pageNumber, pageSize, token }));
  };

  return (
    <Pagination
      pagesCount={pagesCount}
      onPageChanged={onPageChanged}
      currentPage={currentPage}
    />
  );
}
export default PaginationContainer;
