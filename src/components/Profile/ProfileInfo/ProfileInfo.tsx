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
      <img
        className={styles['block-ava']}
        src={DefaultAva}
        alt="Ava"
      />
      {!isAuthProfile ? (
        <div className={styles['block-connection']}>
          {profile.hasConnection}
        </div>
      ) : null }
      <div className={styles['block-description']}>
        <span className={styles['block-description_name']}>
          {`${profile.firstName} ${profile.lastName}`}
        </span>
        { isAuthProfile ? <ProfileStatus status={profile.status} onUpdateStatus={onUpdateStatus} />
          : (
            <div className={styles['block-description_status-block']}>
              <span className={styles['block-description_status-span']}>
                { profile.status }
              </span>
            </div>
          ) }
      </div>
    </div>
  );
};
export default ProfileInfo;
