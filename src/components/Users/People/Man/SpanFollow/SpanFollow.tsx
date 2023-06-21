import React from 'react';
import styles from './SpanFollow.module.css';
import { ISpanFollowProps } from '../../../UsersInterface';

const SpanFollow: React.FC<ISpanFollowProps> = ({
  content, onConnect, userId, isFollowingInProgress, t,
}) => (
  <button
    type="submit"
    disabled={isFollowingInProgress}
    className={`${styles.connection} ${isFollowingInProgress ? styles['container-disabled'] : null}`}
    onClick={() => {
      onConnect(userId);
    }}
  >
    {t(content)}
  </button>
);

export default SpanFollow;
