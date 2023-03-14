import React from 'react';
import Preloader from '../../common/Preloader/Preloader.jsx';
import styles from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks.jsx';
import DefaultAva from '../../../assets/images/DefaultAva.webp';

function ProfileInfo({ infoAuthUser, updateStatus, token }) {
  if (!infoAuthUser) {
    return <Preloader />;
  }
  return (
    <div className={styles.container}>
      <div>
        {infoAuthUser.ava ? (
          <img
            className={styles.ava}
            src={infoAuthUser.ava}
            alt="Ava?"
          />
        ) : (
          <img
            className={styles.ava}
            src={DefaultAva}
            alt="Ava?"
          />
        )}

      </div>
      <div className={styles.descriptionBlock}>
        <span className={styles.name}>
          {`${infoAuthUser.firstName} ${infoAuthUser.lastName}`}
        </span>
        <ProfileStatusWithHooks status={infoAuthUser.status} updateStatus={updateStatus} token={token} />
      </div>
    </div>
  );
}
export default ProfileInfo;
