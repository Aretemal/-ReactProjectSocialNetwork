import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';
import styles from './Man.module.css';

export function Man({
  user, follow, unfollow, followingInProgress,
}) {
  return (
    <div key={user.userId} className={classnames('d-flex flex-row ')}>
      <div className={classnames('p-2 d-flex flex-column')}>
        <NavLink to={`/profile/${user.id}`}>
          <img alt="ava" className={classnames(styles.ava, 'p-2')} src={user.ava ? user.ava : DefaultAva} />
        </NavLink>
        <div className={classnames('p-2')}>
          {user.followed
            ? (
              <button
                className="btn btn-danger"
                type='submit'
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            )
            : (
              <button
                type='submit'
                className="btn btn-primary"
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => { follow(user.id); }}
              >
                Follow
              </button>
            )}
        </div>
      </div>
      <div className={classnames(styles.name, 'p-2')}>{`${user.firstName} ${user.lastName}`}</div>
    </div>
  );
}
