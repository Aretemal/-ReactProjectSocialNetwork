import { IUser } from '../../../store/slices/interfaces/contactInterface';

export interface IContactProps{
    title: string,
    users: IUser[],
}
