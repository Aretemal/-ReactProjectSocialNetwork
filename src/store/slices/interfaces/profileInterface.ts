export interface IProfile {
    id: string,
    profile: {
        firstName: string,
        lastName: string,
        status: string,
        login: string,
        email: string,
        hasConnection: string,
    }
}

export interface IUpdateStatus {
    status: string,
    token: string,
}
