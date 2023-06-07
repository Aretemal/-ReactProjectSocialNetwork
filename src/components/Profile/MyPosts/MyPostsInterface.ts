/* eslint-disable no-unused-vars */
import { IPostItem, ICommentItem } from '../../../store/slices/interfaces/postInterface';

export interface IMyPostsProps {
    isAuthProfile: boolean,
    posts: IPostItem[],
    onAddPost: (newMessageText: string) => void,
    t: (a: string) => any,
    onSetLike: (id: string) => void,
    onDeleteLike: (id: string) => void,
    onSendComment: ({ id, message }: { id: string, message: string }) => void,
    onSelectCommentPost: (id: string) => void,
    firstName: string,
    lastName: string,
    comments: ICommentItem[],
    selectedPost: string,
}

export interface IPostProps {
    commentCount: string,
    id: string,
    onSetLike: (id: string) => void,
    onDeleteLike: (id: string) => void,
    onSendComment: ({ id, message }: { id: string, message: string }) => void,
    likesCount: string,
    isMeLike: boolean,
    message: string,
    createdAt: string,
    firstName: string,
    lastName: string,
    comments: ICommentItem[],
    selectedPost: string,
    onSelectCommentPost: (id: string) => void,
}
