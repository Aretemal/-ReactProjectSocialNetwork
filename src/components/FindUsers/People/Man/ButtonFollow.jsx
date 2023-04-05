import React from 'react';

export function ButtonFollow({
  userId, followingInProgress, content, follow, unfollow, approve, token, authId,
}) {
  if (authId === userId) {
    return (
      <button
        className="btn primary"
        type='submit'
      >
        You
      </button>
    );
  }
  if (content === 'follow') {
    return (
      <button
        className="btn btn-primary"
        type='submit'
        disabled={followingInProgress.some((id) => id === userId)}
        onClick={() => {
          follow(userId, token);
        }}
      >
        Follow
      </button>
    );
  } if (content === 'unfollow') {
    return (
      <button
        className="btn btn-danger"
        type='submit'
        disabled={followingInProgress.some((id) => id === userId)}
        onClick={() => {
          unfollow(userId, token);
        }}
      >
        Unfollow
      </button>
    );
  }
  return (
    <button
      className="btn btn-primary"
      type='submit'
      disabled={followingInProgress.some((id) => id === userId)}
      onClick={() => {
        approve(userId, token);
      }}
    >
      Approve
    </button>
  );
}
