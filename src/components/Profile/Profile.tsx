import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile: React.FC = () => (
  <div className={styles.container}>
    <ProfileInfoContainer />
    <MyPostsContainer />
  </div>
);
export default Profile;
