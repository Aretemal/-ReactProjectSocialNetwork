import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect.jsx';
import {
  getInfoAuthUser,
  getUserProfile,
  updateStatus,
} from '../../redux/Profile-reducer';
import ProfileContainer from './ProfileContainer.jsx';

const mapStateToProps = (state) => ({
  infoAuthUser: state.profilePage.infoAuthUser,
  token: state.auth.token,
  isFetching: state.profilePage.isFetching,
});
const ProfileWithRedirect = withAuthRedirect(ProfileContainer);
export default compose(connect(mapStateToProps, {
  getUserProfile, updateStatus, getInfoAuthUser,
}))(ProfileWithRedirect);
