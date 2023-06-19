import React from 'react';
import { NavLink } from 'react-router-dom';
import DefaultAva from '../../../../assets/images/DefaultAva.webp';
import SpanFollow from './SpanFollow/SpanFollow';
import styles from './Man.module.css';
import { IManProps } from '../../UsersInterface';

const Man: React.FC<IManProps> = ({
  user, onConnect, isFollowingInProgress,
}) => (
  <div key={user.id} className={styles.container}>
    <div className={styles['block-image']}>
      <NavLink to={`/profile/${user.attributes.login}`}>
        <img alt="ava" className={styles['block-image_ava']} src={DefaultAva} />
      </NavLink>
    </div>
    <div className={styles['block-content']}>
      <div className={styles['block-content_name']}>{`${user.attributes.firstName} ${user.attributes.lastName}`}</div>
      <div className={styles['block-content_dialog']}>Write message</div>
      <SpanFollow
        isFollowingInProgress={isFollowingInProgress}
        userId={user.id}
        onConnect={onConnect}
        content={user.attributes.followed}
      />
    </div>
  </div>
);

export default Man;
