import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import Header from './Header.jsx';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { logout })(Header);
