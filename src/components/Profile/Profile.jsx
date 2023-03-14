import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import styles from './Profile.module.css';

function Profile({ infoAuthUser, updateStatus, token }) {
  return (
    <div className={styles.profile}>
      <ProfileInfo infoAuthUser={infoAuthUser} updateStatus={updateStatus} token={token} />
      <MyPostsContainer />
    </div>
  );
}
export default Profile;
