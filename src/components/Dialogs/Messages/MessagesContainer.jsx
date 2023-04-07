import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect.jsx';
import {
  getAllMessage, selectDialogs,
  sendMessage,
} from '../../../redux/Dialogs-reducer.js';
import Messages from './Messages.jsx';

const mapStateToProps = (state) => ({
  messages: state.dialogsPage.messages,
  token: state.auth.token,
  activeId: state.dialogsPage.activeId,
  authId: state.profilePage.authId,
});

const MessagesWithRedirect = withAuthRedirect(Messages);
export default compose(
  connect(
    mapStateToProps,
    { sendMessage, getAllMessage, selectDialogs },
  ),
)(MessagesWithRedirect);
