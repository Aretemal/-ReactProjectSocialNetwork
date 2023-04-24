import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import styles from './Profile.module.css';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer.jsx';

function Profile() {
  return (
    <div className={styles.container}>
      <ProfileInfoContainer />
      <MyPostsContainer />
    </div>
  );
}
export default Profile;
