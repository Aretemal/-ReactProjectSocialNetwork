/* eslint-disable no-unused-vars */
import { IPostItem } from '../../../store/slices/interfaces/postInterface';

export interface IMyPostsProps {
    posts: IPostItem[],
    onAddPost: (newMessageText: string) => void,
    firstName: string,
    lastName: string,
}

export interface IPostProps {
    message: string,
    createdAt: string,
    firstName: string,
    lastName: string,
}
