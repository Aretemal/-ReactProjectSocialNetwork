import React from 'react';
import { connect } from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { compose } from 'redux';
import {
  getInfoAuthUser,
  getUserProfile,
  updateStatus,
} from '../../redux/Profile-reducer';
import ProfileContainer from './ProfileContainer.jsx';

const mapStateToProps = (state) => ({
  infoAuthUser: state.profilePage.infoAuthUser,
  token: state.auth.token,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}
export default compose(
  connect(mapStateToProps, {
    getUserProfile, updateStatus, getInfoAuthUser,
  }),
  withRouter,
)(ProfileContainer);
