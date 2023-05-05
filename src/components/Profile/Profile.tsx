import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import ContactContainer from './Contact/ContactContainer';

const Profile: React.FC = () => (
  <div className={styles.container}>
    <ProfileInfoContainer />
    <MyPostsContainer />
    <ContactContainer />
  </div>
);
export default Profile;
