/* eslint-disable no-unused-vars */
import { IComment } from '../../../store/slices/interfaces/postInterface';
import { IUserItem } from '../../../store/slices/interfaces/dialogInterface';

export interface IPostProps {
    t: (a: string) => any,
    isSelectedSettings: boolean,
    isUpdatedPost: boolean,
    onSettings: (id: number) => void,
    onSetUpdatedPostId: (id: number) => void,
    onUpdatePost: ({ postsId, content }: { postsId: string, content: string }) => void,
    senders: IUserItem[],
    commentCount: string,
    id: string,
    onSetLike: (id: string) => void,
    onDeleteLike: (id: string) => void,
    onDeletePost: (id: string) => void,
    onSendComment: ({ id, message }: { id: string, message: string }) => void,
    likesCount: number,
    isMeLike: boolean,
    message: string,
    createdAt: string,
    firstName: string,
    lastName: string,
    comments: IComment[],
    selectedPost: string,
    onSelectCommentPost: ({ id, postId }: { postId: string, id: string }) => void,
}
