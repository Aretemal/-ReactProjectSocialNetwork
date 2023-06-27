import React from 'react';
import { useTranslation } from 'react-i18next';
import { requestUsers } from '../../../store/slices/thunks/usersThunks';
import Pagination from './Pagination';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';

const PaginationContainer: React.FC = () => {
  const {
    pageSize, totalUsersCount, currentPage,
  } = useAppSelector((state) => state.users);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers({ currentPage: pageNumber, pageSize, token }));
  };

  return (
    <Pagination
      t={t}
      pagesCount={pagesCount}
      onPageChanged={onPageChanged}
      currentPage={currentPage}
    />
  );
};
export default PaginationContainer;
