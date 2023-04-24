import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect.jsx';
import {
  getAllDialogs,
  setDialogId,
} from '../../../store/slices/dialogSlice.js';
import { DialogsNavbar } from './DialogsNavbar.jsx';

function DialogsNavbarContainer() {
  const { token } = useSelector((state) => state.auth);
  const { dialogs } = useSelector((state) => state.dialog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDialogs(token));
  }, [dispatch, token]);

  const onSetDialogId = (id) => {
    dispatch(setDialogId(id));
  };

  return (
    <DialogsNavbar
      dialogs={dialogs}
      onSetDialogId={onSetDialogId}
    />
  );
}

const DialogsNavbarWithRedirect = withAuthRedirect(DialogsNavbarContainer);

export default DialogsNavbarWithRedirect;
