import React from 'react';
import styles from './SpanFollow.module.css';
import { ISpanFollowProps } from '../../../UsersInterface';

const SpanFollow: React.FC<ISpanFollowProps> = ({
  content, onApprove, onFollow, onUnfollow, userId,
}) => {
  if (content === 'follow') {
    return (
      <span
        className={styles.connection}
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
      onClick={() => {
        onApprove(userId);
      }}
    >
      Approve
    </span>
  );
};

export default SpanFollow;
