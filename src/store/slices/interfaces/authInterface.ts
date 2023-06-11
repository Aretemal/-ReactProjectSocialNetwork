export interface IError {
    status: string,
    title: string,
    detail: string,
}
export interface AuthInterface {
    authLogin: string,
    isAuth: boolean,
    token: string,
    authId: string,
    errors: IError[],
}

export interface IToken{
    token?: string,
    login?: string,
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
export interface ILRResponse {
    id: string,
    type: string,
    attributes: {
        token: string,
        login: string,
    },
}
