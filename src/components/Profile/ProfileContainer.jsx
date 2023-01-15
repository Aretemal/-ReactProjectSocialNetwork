import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { setUserProfile } from '../../redux/Profile-reducer';
import Profile from './Profile.jsx';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { router } = this.props;
    let { userId } = router.params;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        console.log(response.data);
        setUserProfile(response.data);
      });
  }

  render() {
    const { profile } = this.props;
    return (
      <div>
        <Profile {...this.props} profile={profile} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}
export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
