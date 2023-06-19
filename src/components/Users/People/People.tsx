import React from 'react';
import Man from './Man/Man';
import { IPeopleProps } from '../UsersInterface';

const People: React.FC<IPeopleProps> = ({
  users, onUnfollow, onFollow, onApprove, followingInProgress,
}) => {
  const items = users.map((user) => {
    const isFollowingInProgress = followingInProgress.some((u) => +u === +user.id);
    let onConnect;
    switch (user.attributes.followed) {
      case 'follow': onConnect = onFollow; break;
      case 'unfollow': onConnect = onUnfollow; break;
      case 'approve': onConnect = onApprove; break;
      default: return null;
    }
    return (
      <Man
        isFollowingInProgress={isFollowingInProgress}
        key={user.id}
        onConnect={onConnect}
        user={user}
      />
    );
  });

  return (
    <div className="ms-3 mt-3">
      {items}
    </div>
  );
};

export default People;
