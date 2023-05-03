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

    onUnfollow: (id: string) => void,
    onFollow: (id: string) => void,
    onApprove: (id: string) => void,
}
export interface IManProps {
    user: IUser,

    onUnfollow: (id: string) => void,
    onFollow: (id: string) => void,
    onApprove: (id: string) => void,
}
export interface ISpanFollowProps {
    userId: string,
    content: string,
    onUnfollow: (id: string) => void,
    onFollow: (id: string) => void,
    onApprove: (id: string) => void,
}
