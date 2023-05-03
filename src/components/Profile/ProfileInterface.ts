/* eslint-disable no-unused-vars */
import { IProfile } from '../../store/slices/interfaces/profileInterface';

export interface IProfileInfoProps extends IProfile{
    onUpdateStatus: (status: string) => void,
}

export interface IProfileStatusProps{
    status: string,
    onUpdateStatus: (status: string) => void,
}
