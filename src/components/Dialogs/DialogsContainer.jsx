import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect.jsx';
import Dialogs from './Dialogs.jsx';

const mapStateToProps = (state) => ({
  activeId: state.dialogsPage.activeId,
});

const DialogsWithRedirect = withAuthRedirect(Dialogs);
export default compose(
  connect(
    mapStateToProps,
    {},
  ),
)(DialogsWithRedirect);
