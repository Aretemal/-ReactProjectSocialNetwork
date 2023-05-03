/* eslint-disable no-unused-vars */

import { IMessageItem } from '../../../store/slices/interfaces/dialogInterface';

export interface IMessagesProps{
    messages: IMessageItem[],
    onSendMessage: (message: string, id: string) => void,
    authId: string,
    activeId: string,
}
export interface IMessageProps{
    message: string,
    authId: string,
    senderId: string,
}
