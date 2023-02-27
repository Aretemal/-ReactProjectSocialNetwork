import { connect } from 'react-redux';
import { registration } from '../../redux/auth-reducer';
import { Registration } from './Registration.jsx';

export default connect(null, { registration })(Registration);
