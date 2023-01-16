import axios from 'axios';
import React from 'react';
import Profile from './Profile.jsx';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { router, setUserProfile } = this.props;
    let { userId } = router.params;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        setUserProfile(response.data);
      });
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
