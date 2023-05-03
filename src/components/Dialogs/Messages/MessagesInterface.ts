/* eslint-disable no-unused-vars */

import { IMessageItem } from '../../../interfaces/IDialog';

export interface IMessagesProps{
    messages: IMessageItem[],
    onSendMessage: (message: string, id: string) => void,
    authId: string,
    activeId: string,
}
