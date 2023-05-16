import React, { useEffect } from 'react';
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect';
import {
  getAllDialogs,
  setActiveDialog,
} from '../../../store/slices/dialogSlice';
import DialogsList from './DialogsList';
import { useAppDispatch, useAppSelector } from '../../../hook/hook';

const DialogsListContainer: React.FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const { dialogs } = useAppSelector((state) => state.dialog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllDialogs(token));
  }, [dispatch, token]);

  const onSetDialogId = (id: string): void => {
    dispatch(setActiveDialog(id));
  };

  return (
    <DialogsList
      dialogs={dialogs}
      onSetDialogId={onSetDialogId}
    />
  );
};

const DialogsNavbarWithRedirect = withAuthRedirect(DialogsListContainer);

export default DialogsNavbarWithRedirect;
