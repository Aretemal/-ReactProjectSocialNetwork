export interface IUser {
    id: string,
    type: string,
    attributes: {
        firstName: string,
        lastName: string,
        status: string,
        login: string,
        email: string,
        followed: string,
    }
}

export interface IUsers {
    users: IUser[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: string[],
}

export interface IToggleIsFollowingProgress {
    isFetching: boolean,
    id: string,
}

export interface IRequestUsers {
    currentPage: number,
    pageSize: number,
    token: string,
}

export interface IDataConnection {
    id: string,
    token: string,
}
