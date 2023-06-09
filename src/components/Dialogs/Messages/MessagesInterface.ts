/* eslint-disable no-unused-vars */

import { IMessageItem, IUserItem } from '../../../store/slices/interfaces/dialogInterface';

export interface IMessagesProps{
    messages: IMessageItem[],
    onSendMessage: (message: string, id: string) => void,
    onBack: () => void,
    authId: string,
    activeId: string,
    senders: IUserItem[],
    usersCount: number,
}
export interface IMessageProps{
    message: string,
    index: number,
    length: number,
    authId: string,
    senderId: string,
    sender: IUserItem,
}
