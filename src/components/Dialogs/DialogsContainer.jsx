import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect.jsx';
import { addMessageActionCreator } from '../../redux/Dialogs-reducer';
import Dialogs from './Dialogs.jsx';

const mapStateToProps = (state) => ({
  messages: state.dialogsPage.messages,
  dialogs: state.dialogsPage.dialogs,
  isAuth: state.auth.isAuth,
  activeId: state.dialogsPage.activeId,
});
const mapDispatchToProps = (dispatch) => ({
  addMessage: (newMessageBody) => {
    dispatch(addMessageActionCreator(newMessageBody));
  },
});
const DialogsWithRedirect = withAuthRedirect(Dialogs);
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(DialogsWithRedirect);
