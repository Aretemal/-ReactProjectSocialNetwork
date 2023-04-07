/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { DialogsNavbar } from './DialogsNavbar.jsx';

class DialogsNavbarConnect extends React.Component {
  componentDidMount() {
    const { token, getAllDialogs } = this.props;
    getAllDialogs(token);
  }

  render() {
    const { dialogs, selectDialogs } = this.props;
    return <DialogsNavbar dialogs={dialogs} selectDialogs={selectDialogs} />;
  }
}
export default DialogsNavbarConnect;
