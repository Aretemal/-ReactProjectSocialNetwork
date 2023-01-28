import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import HeaderContainer from './HeaderContainer.jsx';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { logout })(HeaderContainer);
