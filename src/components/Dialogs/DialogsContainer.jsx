import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect.jsx';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/Dialogs-reducer';
import Dialogs from './Dialogs.jsx';

const mapStateToProps = (state) => ({
  messages: state.dialogsPage.messages,
  dialogs: state.dialogsPage.dialogs,
  newMessageText: state.dialogsPage.newMessageText,
});
const mapDispatchToProps = (dispatch) => ({
  addMessage: () => {
    dispatch(addMessageActionCreator());
  },
  messageChange: (text) => {
    dispatch(updateNewMessageTextActionCreator(text));
  },
});
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);
