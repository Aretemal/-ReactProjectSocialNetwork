import React from 'react';
import { connect } from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getUserProfile } from '../../redux/Profile-reducer';
import ProfileContainer from './ProfileClass.jsx';

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
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
export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));
