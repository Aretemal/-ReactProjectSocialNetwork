export interface IProfile {
    profile: {
        firstName: string,
        lastName: string,
        status: string,
        login: string,
        email: string,
    }
}

export interface IUpdateStatus {
    status: string,
    token: string,
}
