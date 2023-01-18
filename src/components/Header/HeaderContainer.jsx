import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth-reducer';
import HeaderContainer from './HeaderClass.jsx';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
