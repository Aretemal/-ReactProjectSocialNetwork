/* eslint-disable no-unused-vars */
export interface IOnAuthentication {
    login: string,
    password: string,
}

export interface ILoginProps {
    onAuthentication: (data: IOnAuthentication) => void,
    isAuth: boolean,
    authLogin: string,
}
