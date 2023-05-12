export interface AuthInterface {
    isAuth: boolean,
    token: string,
    authId: string,
    socket: any,
}

export interface IToken{
    token?: string,
    id?: string,
}
export interface IAuthenticationData {
    login: string,
    password: string,
}
export interface IRegistrationData {
    login: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
}
