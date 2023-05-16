/* eslint-disable no-unused-vars */
import { Socket } from 'socket.io-client';

export interface IDialogsProps{
    activeId: string,
    socket?: Socket,
}
