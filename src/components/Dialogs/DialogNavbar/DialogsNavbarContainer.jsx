import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect.jsx';
import {
  getAllDialogs, selectDialogs,
} from '../../../redux/Dialogs-reducer.js';
import DialogsNavbarConnect from './DialogsNavbarConnect.jsx';

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  token: state.auth.token,
});

const DialogsNavbarWithRedirect = withAuthRedirect(DialogsNavbarConnect);
export default compose(
  connect(
    mapStateToProps,
    { getAllDialogs, selectDialogs },
  ),
)(DialogsNavbarWithRedirect);
