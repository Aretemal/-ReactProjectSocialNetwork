import { IUserItem } from './dialogInterface';
import { IError } from './allInterfaces';

export interface IPost {
    id: string,
    type: string,
    attributes: {
        authorId: string,
        isMeLike: boolean,
        content: string,
        createdAt: string,
        likesCount: number,
        commentCount: string,
    }
}
export interface IComment {
    id: string,
    type: string,
    attributes: {
        message: string,
        senderCommentId: string,
        postCommentId: string,
        createdAt: string,
    }
}
export interface IPostsInitialState {
    posts: IPost[],
    comments: IComment[],
    senders: IUserItem[],
    selectedPost: string,
    errors: IError[],
}
