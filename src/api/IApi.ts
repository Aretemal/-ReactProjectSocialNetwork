/* eslint-disable no-unused-vars */
export interface IContactAPI {
    getFriends: (token: string, count?: string) => any,
    getSubscribers: (token: string, count?: string) => any,
    getSubscriptions: (token: string, count?: string) => any,
}
