import React from 'react';
import Preloader from '../common/Preloader/Preloader.jsx';
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
      infoAuthUser, updateStatus, token, isFetching,
    } = this.props;
    return (
      <div>
        {isFetching ? <Preloader />
          : <Profile infoAuthUser={infoAuthUser} updateStatus={updateStatus} token={token} />}
      </div>
    );
  }
}
export default ProfileContainer;
