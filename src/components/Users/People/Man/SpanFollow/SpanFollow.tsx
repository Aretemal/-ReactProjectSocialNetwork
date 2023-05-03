import React from 'react';
import styles from './SpanFollow.module.css';

export function SpanFollow({
  content, onApprove, onFollow, onUnfollow, userId,
}) {
  if (content === 'follow') {
    return (
      <span
        className={styles.connection}
        type='submit'
        onClick={() => {
          onFollow(userId);
        }}
      >
        Follow
      </span>
    );
  } if (content === 'unfollow') {
    return (
      <span
        className={styles.connection}
        type='submit'
        onClick={() => {
          onUnfollow(userId);
        }}
      >
        Unfollow
      </span>
    );
  }
  return (
    <span
      className={styles.connection}
      type='submit'
      onClick={() => {
        onApprove(userId);
      }}
    >
      Approve
    </span>
  );
}
