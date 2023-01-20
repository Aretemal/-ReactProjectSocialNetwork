import React from 'react';
import { connect } from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect.jsx';
import { getUserProfile } from '../../redux/Profile-reducer';
import ProfileContainer from './ProfileContainer.jsx';

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
export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
