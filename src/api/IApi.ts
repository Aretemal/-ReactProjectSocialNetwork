/* eslint-disable no-unused-vars */
export interface IContactAPI {
    getFriends: ({ token, id }: { token: string, id: string}, count?: string) => any,
    getSubscribers: ({ token, id }: { token: string, id: string}, count?: string) => any,
    getSubscriptions: ({ token, id }: { token: string, id: string}, count?: string) => any,
}
