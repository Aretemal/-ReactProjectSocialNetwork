import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect.jsx';
import { addMessageActionCreator } from '../../redux/Dialogs-reducer';
import Dialogs from './Dialogs.jsx';

const mapStateToProps = (state) => ({
  messages: state.dialogsPage.messages,
  dialogs: state.dialogsPage.dialogs,
});
const mapDispatchToProps = (dispatch) => ({
  addMessage: (newMessageBody) => {
    dispatch(addMessageActionCreator(newMessageBody));
  },
});
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);
