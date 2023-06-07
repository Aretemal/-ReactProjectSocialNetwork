export interface IPostItem {
    id: string,
    type: string,
    attributes: {
        authorId: string,
        isMeLike: boolean,
        content: string,
        createdAt: string,
        likesCount: string,
        commentCount: string,
    }
}
export interface ICommentItem {
    id: string,
    type: string,
    attributes: {
        message: string,
        senderCommentId: string,
        postCommentId: string,
        createdAt: string,
    }
}
export interface IPost {
    posts: IPostItem[],
    comments: ICommentItem[],
    selectedPost: string,
}

export interface IAddPost {
    newMessageText: string,
    token: string,
}

export interface IOnLike {
    id: string,
    token: string,
}

export interface IOnLikePayload {
    attributes: {
        senderLikeId: string,
        postLikeId: string,
    }
    like: number,
}
