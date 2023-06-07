/* eslint-disable no-unused-vars */

export interface IProfileInfoProps {
    profile: {
        firstName: string,
        lastName: string,
        status: string,
        login: string,
        email: string,
        hasConnection: string,
    },
    onUpdateStatus: (status: string) => void,
    isAuthProfile: boolean,
}

export interface IProfileStatusProps{
    status: string,
    onUpdateStatus: (status: string) => void,
}
