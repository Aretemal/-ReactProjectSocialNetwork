import React from 'react';
import { Navigate } from 'react-router-dom';
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
      profile, isAuth, status, updateStatus,
    } = this.props;
    if (!isAuth) return <Navigate to='/login' />;
    return (
      <div>
        <Profile profile={profile} status={status} updateStatus={updateStatus} />
      </div>
    );
  }
}
export default ProfileContainer;
