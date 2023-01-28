import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Login } from './Login.jsx';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
