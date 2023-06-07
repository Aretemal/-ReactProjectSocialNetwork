import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import DefaultAva from '../../../assets/images/DefaultAva.webp';
import { IProfileInfoProps } from '../ProfileInterface';

const ProfileInfo: React.FC<IProfileInfoProps> = ({ profile, isAuthProfile, onUpdateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <div className={styles['ava-container']}>
          <img
            className={styles.ava}
            src={DefaultAva}
            alt="Ava"
          />
        </div>
        {!isAuthProfile ? (
          <div className={styles.connection}>
            {profile.hasConnection}
          </div>
        ) : null }
        <div className={styles.description}>
          <span className={styles.name}>
            {`${profile.firstName} ${profile.lastName}`}
          </span>
          { isAuthProfile ? <ProfileStatus status={profile.status} onUpdateStatus={onUpdateStatus} />
            : (
              <div className={styles.status}>
                <span className={styles.spanStatus}>{ profile.status }</span>
              </div>
            ) }
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
