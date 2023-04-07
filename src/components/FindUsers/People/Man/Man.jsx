import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';
import { ButtonFollow } from './ButtonFollow.jsx';
import styles from './Man.module.css';

export function Man({
  user, follow, unfollow, followingInProgress, approve, token, userId,
}) {
  return (
    <div key={user.id} className={classnames('d-flex flex-row ')}>
      <div className={classnames('p-2 d-flex flex-column')}>
        <NavLink to={`/profile/${user.id}`}>
          <img alt="ava" className={classnames(styles.ava, 'p-2')} src={user.attributes.ava ? user.attributes.ava : DefaultAva} />
        </NavLink>
        <div className={classnames('p-2')}>
          <ButtonFollow
            authId={userId}
            token={token}
            userId={user.id}
            followingInProgress={followingInProgress}
            follow={follow}
            content={user.attributes.followed}
            unfollow={unfollow}
            approve={approve}
          />
        </div>
      </div>
      <div className={classnames(styles.name, 'p-2')}>{`${user.attributes.firstName} ${user.attributes.lastName}`}</div>
    </div>
  );
}
