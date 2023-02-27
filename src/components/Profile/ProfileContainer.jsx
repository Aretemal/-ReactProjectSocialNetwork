import React from 'react';
import Profile from './Profile.jsx';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const {
      getInfoAuthUser, token,
    } = this.props;
    getInfoAuthUser(token);
  }

  render() {
    const {
      infoAuthUser, updateStatus, token,
    } = this.props;
    return (
      <div>
        <Profile infoAuthUser={infoAuthUser} updateStatus={updateStatus} token={token} />
      </div>
    );
  }
}
export default ProfileContainer;
