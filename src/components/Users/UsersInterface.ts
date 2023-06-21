/* eslint-disable no-unused-vars */

import { IUser } from '../../store/slices/interfaces/usersInterface';

export interface IPaginationProps {
    pagesCount: number,
    currentPage: number,
    t: (a: string) => any,
    onPageChanged: (pageNumber: number) => void,
}
export interface IPaginationItemProps {
    number: number,
    isCurrent: boolean,

    onPageChanged: (pageNumber: number) => void,
}

export interface IPeopleProps {
    t: (a: string) => any,
    users: IUser[],
    followingInProgress: number[],
    onUnfollow: (id: string) => void,
    onUser: ({ profileId, login }: { profileId: string, login: string }) => any,
    onFollow: (id: string) => void,
    onApprove: (id: string) => void,
}
export interface IManProps {
    t: (a: string) => any,
    onUser: ({ profileId, login }: { profileId: string, login: string }) => any,
    user: IUser,
    isFollowingInProgress: boolean,
    onConnect: (id: string) => void,
}
export interface ISpanFollowProps {
    t: (a: string) => any,
    isFollowingInProgress: boolean,
    userId: string,
    content: string,
    onConnect: (id: string) => void,
}
