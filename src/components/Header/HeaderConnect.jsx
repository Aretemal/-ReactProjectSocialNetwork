import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import Header from './Header.jsx';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { logout })(Header);
