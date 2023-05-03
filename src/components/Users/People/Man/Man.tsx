import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';
import { SpanFollow } from './SpanFollow/SpanFollow.jsx';
import styles from './Man.module.css';

export function Man({
  user, onUnfollow, onFollow, onApprove,
}) {
  return (
    <div key={user.id} className={classnames('d-flex flex-row ')}>
      <div className={classnames('p-2 d-flex flex-column')}>
        <NavLink to={`/profile/${user.id}`}>
          <img alt="ava" className={classnames(styles.ava, 'p-2')} src={DefaultAva} />
        </NavLink>
      </div>
      <div className={styles.content}>
        <div className={classnames(styles.name, 'p-2')}>{`${user.attributes.firstName} ${user.attributes.lastName}`}</div>
        <SpanFollow
          userId={user.id}
          onFollow={onFollow}
          content={user.attributes.followed}
          onUnfollow={onUnfollow}
          onApprove={onApprove}
        />
      </div>
    </div>
  );
}
