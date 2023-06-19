/* eslint-disable no-unused-vars */

import { IUser } from '../../store/slices/interfaces/usersInterface';

export interface IPaginationProps {
    pagesCount: number,
    currentPage: number,

    onPageChanged: (pageNumber: number) => void,
}
export interface IPaginationItemProps {
    number: number,
    isCurrent: boolean,

    onPageChanged: (pageNumber: number) => void,
}

export interface IPeopleProps {
    users: IUser[],
    followingInProgress: number[],
    onUnfollow: (id: string) => void,
    onFollow: (id: string) => void,
    onApprove: (id: string) => void,
}
export interface IManProps {
    user: IUser,
    isFollowingInProgress: boolean,
    onConnect: (id: string) => void,
}
export interface ISpanFollowProps {
    isFollowingInProgress: boolean,
    userId: string,
    content: string,
    onConnect: (id: string) => void,
}
