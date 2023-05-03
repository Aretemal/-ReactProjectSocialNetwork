import React from 'react';
import { Man } from './Man/Man.jsx';

export function People({
  users, onUnfollow, onFollow, onApprove,
}) {
  const items = users.map((user) => (
    <Man
      key={user.id}
      onFollow={onFollow}
      onUnfollow={onUnfollow}
      onApprove={onApprove}
      user={user}
    />
  ));

  return (
    <div className="ms-3 mt-3">
      {items}
    </div>
  );
}
