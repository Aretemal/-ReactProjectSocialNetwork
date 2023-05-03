/* eslint-disable no-unused-vars */

import { IDialogItem } from '../../../store/slices/interfaces/dialogInterface';

export interface IDialogsListProps{
    dialogs: IDialogItem[],
    onSetDialogId: (id: string) => void,
}

export interface IDialogUserProps{
    name: string,
    id: string,
    onSetDialogId: (id: string) => void,
}
