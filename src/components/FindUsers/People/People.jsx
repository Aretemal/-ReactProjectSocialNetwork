/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Man } from './Man/Man.jsx';

export function People({
  users, follow, unfollow, followingInProgress, approve, token, userId,
}) {
  const items = users.map((user) => (
    <Man
      userId={userId}
      token={token}
      key={user.id}
      follow={follow}
      unfollow={unfollow}
      approve={approve}
      user={user}
      followingInProgress={followingInProgress}
    />
  ));

  return (
    <div className="ms-3 mt-3">
      {items}
    </div>
  );
}
