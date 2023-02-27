import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

function Profile({ infoAuthUser, updateStatus, token }) {
  return (
    <div>
      <ProfileInfo infoAuthUser={infoAuthUser} updateStatus={updateStatus} token={token} />
      <MyPostsContainer />
    </div>
  );
}
export default Profile;
