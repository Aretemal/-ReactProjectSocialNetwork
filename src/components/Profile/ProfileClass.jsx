import React from 'react';
import Profile from './Profile.jsx';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { router, getUserProfile } = this.props;
    let { userId } = router.params;
    if (!userId) {
      userId = 2;
    }
    getUserProfile(userId);
  }

  render() {
    const { profile } = this.props;
    return (
      <div>
        <Profile profile={profile} />
      </div>
    );
  }
}
export default ProfileContainer;
