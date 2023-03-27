/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Man } from './Man/Man.jsx';

export function People({
  users, follow, unfollow, followingInProgress,
}) {
  const items = users.map((user) => (
    <Man
      key={user.id}
      follow={follow}
      unfollow={unfollow}
      user={user.attributes}
      followingInProgress={followingInProgress}
    />
  ));

  return (
    <div className="ms-3 mt-3">
      {items}
    </div>
  );
}
