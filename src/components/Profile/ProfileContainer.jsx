import React from 'react';
import Profile from './Profile.jsx';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const {
      router, getUserProfile, getStatus, authorizedUserId, history,
    } = this.props;
    let { userId } = router.params;
    if (!userId) {
      userId = authorizedUserId;
      if (!userId) {
        userId = history.push('/login');
      }
    }
    getUserProfile(userId);
    getStatus(userId);
  }

  render() {
    const {
      profile, status, updateStatus,
    } = this.props;
    return (
      <div>
        <Profile profile={profile} status={status} updateStatus={updateStatus} />
      </div>
    );
  }
}
export default ProfileContainer;
