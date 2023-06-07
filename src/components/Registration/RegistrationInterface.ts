/* eslint-disable no-unused-vars */
export interface IOnRegistration {
    login: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
}

export interface ILoginProps {
    onRegistration: (data: IOnRegistration) => void,
    isAuth: boolean,
    authLogin: string,
}
