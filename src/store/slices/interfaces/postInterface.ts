export interface IPostItem {
    id: string,
    type: string,
    attributes: {
        content: string,
        createdAt: string,
    }
}
export interface IPost {
    posts: IPostItem[],
}

export interface IAddPost {
    newMessageText: string,
    token: string,
}
