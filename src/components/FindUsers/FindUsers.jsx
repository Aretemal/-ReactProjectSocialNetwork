import React from "react";
import classes from './FindUsers.module.css'

const FindUsers = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    photoURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAwQCAQb/xAAmEAEAAgIBBAEEAwEAAAAAAAAAAQIDESEEEjFRcTJBYYEiUpET/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEEA//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A+oAdmUAABxmma04nU7BRxe00rvW2but/af8AXm59yFaIzUnzwp3Rre40xgVsGbHlmnE8w0xMWjceAAAAAAAAAAAeXvFI3Ms2TJN59Q76iOYlITQBQAAdUyTTevDkBsie6ImPuJ4bbp+1EUAAAAAAABHqPNUV+o+mvygJoAoAAAAv0/i3yqngj+G/yoigAAAAAAAM2TL3xrWuXBMdszE/YVAAAAAAFcWTUxTXC7LjjeSvy1IuAAAAAAAAOMmKL871LNMamY9NjPnjV9+w1MBUAAHtK99tPFunrxNvYO8eOKfmXYIoAAAAAAAA4y0768eY5dkTE+JBjHeeIjJw4VAAHtKze2oa4iIiIjxCPT61ZaJifExKLgAAAAAAAAABM6iZ9Me5idxxK2bJGu2P2iJpM7ncgKAACvT/AFTH4SdY79lt63ANQ8raLRuJ29RQAAAARnqPVXFstrffUfgKvbJWnmefUI3yzbiOITBKAKAAAAAAEceFa55j6uUgGqt628S6Y3dc14jzv5QrSIf97eoeC1MBUAAAAAAAAAAAAAAAAf/Z',
                    id: 1,
                    followed: false,
                    fullName: 'Dmitry',
                    location: {city: 'Minsk', country: 'Belarus'},
                    status: 'I am student'
                },
                {
                    photoURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAwQCAQb/xAAmEAEAAgIBBAEEAwEAAAAAAAAAAQIDESEEEjFRcTJBYYEiUpET/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEEA//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A+oAdmUAABxmma04nU7BRxe00rvW2but/af8AXm59yFaIzUnzwp3Rre40xgVsGbHlmnE8w0xMWjceAAAAAAAAAAAeXvFI3Ms2TJN59Q76iOYlITQBQAAdUyTTevDkBsie6ImPuJ4bbp+1EUAAAAAAABHqPNUV+o+mvygJoAoAAAAv0/i3yqngj+G/yoigAAAAAAAM2TL3xrWuXBMdszE/YVAAAAAAFcWTUxTXC7LjjeSvy1IuAAAAAAAAOMmKL871LNMamY9NjPnjV9+w1MBUAAHtK99tPFunrxNvYO8eOKfmXYIoAAAAAAAA4y0768eY5dkTE+JBjHeeIjJw4VAAHtKze2oa4iIiIjxCPT61ZaJifExKLgAAAAAAAAABM6iZ9Me5idxxK2bJGu2P2iJpM7ncgKAACvT/AFTH4SdY79lt63ANQ8raLRuJ29RQAAAARnqPVXFstrffUfgKvbJWnmefUI3yzbiOITBKAKAAAAAAEceFa55j6uUgGqt628S6Y3dc14jzv5QrSIf97eoeC1MBUAAAAAAAAAAAAAAAAf/Z',
                    id: 2,
                    followed: true,
                    fullName: 'Oleg',
                    location: {city: 'Kiev', country: 'Ukraine'},
                    status: 'I am student'
                },
                {
                    photoURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAwQCAQb/xAAmEAEAAgIBBAEEAwEAAAAAAAAAAQIDESEEEjFRcTJBYYEiUpET/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEEA//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A+oAdmUAABxmma04nU7BRxe00rvW2but/af8AXm59yFaIzUnzwp3Rre40xgVsGbHlmnE8w0xMWjceAAAAAAAAAAAeXvFI3Ms2TJN59Q76iOYlITQBQAAdUyTTevDkBsie6ImPuJ4bbp+1EUAAAAAAABHqPNUV+o+mvygJoAoAAAAv0/i3yqngj+G/yoigAAAAAAAM2TL3xrWuXBMdszE/YVAAAAAAFcWTUxTXC7LjjeSvy1IuAAAAAAAAOMmKL871LNMamY9NjPnjV9+w1MBUAAHtK99tPFunrxNvYO8eOKfmXYIoAAAAAAAA4y0768eY5dkTE+JBjHeeIjJw4VAAHtKze2oa4iIiIjxCPT61ZaJifExKLgAAAAAAAAABM6iZ9Me5idxxK2bJGu2P2iJpM7ncgKAACvT/AFTH4SdY79lt63ANQ8raLRuJ29RQAAAARnqPVXFstrffUfgKvbJWnmefUI3yzbiOITBKAKAAAAAAEceFa55j6uUgGqt628S6Y3dc14jzv5QrSIf97eoeC1MBUAAAAAAAAAAAAAAAAf/Z',
                    id: 3,
                    followed: false,
                    fullName: 'Olga',
                    location: {city: 'Moscow', country: 'Russia'},
                    status: 'I am student'
                },
                {
                    photoURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAwQCAQb/xAAmEAEAAgIBBAEEAwEAAAAAAAAAAQIDESEEEjFRcTJBYYEiUpET/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEEA//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A+oAdmUAABxmma04nU7BRxe00rvW2but/af8AXm59yFaIzUnzwp3Rre40xgVsGbHlmnE8w0xMWjceAAAAAAAAAAAeXvFI3Ms2TJN59Q76iOYlITQBQAAdUyTTevDkBsie6ImPuJ4bbp+1EUAAAAAAABHqPNUV+o+mvygJoAoAAAAv0/i3yqngj+G/yoigAAAAAAAM2TL3xrWuXBMdszE/YVAAAAAAFcWTUxTXC7LjjeSvy1IuAAAAAAAAOMmKL871LNMamY9NjPnjV9+w1MBUAAHtK99tPFunrxNvYO8eOKfmXYIoAAAAAAAA4y0768eY5dkTE+JBjHeeIjJw4VAAHtKze2oa4iIiIjxCPT61ZaJifExKLgAAAAAAAAABM6iZ9Me5idxxK2bJGu2P2iJpM7ncgKAACvT/AFTH4SdY79lt63ANQ8raLRuJ29RQAAAARnqPVXFstrffUfgKvbJWnmefUI3yzbiOITBKAKAAAAAAEceFa55j6uUgGqt628S6Y3dc14jzv5QrSIf97eoeC1MBUAAAAAAAAAAAAAAAAf/Z',
                    id: 4,
                    followed: false,
                    fullName: 'Artem',
                    location: {city: 'Berlin', country: 'German'},
                    status: 'I am student'
                },
                {
                    photoURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAwQCAQb/xAAmEAEAAgIBBAEEAwEAAAAAAAAAAQIDESEEEjFRcTJBYYEiUpET/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEEA//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A+oAdmUAABxmma04nU7BRxe00rvW2but/af8AXm59yFaIzUnzwp3Rre40xgVsGbHlmnE8w0xMWjceAAAAAAAAAAAeXvFI3Ms2TJN59Q76iOYlITQBQAAdUyTTevDkBsie6ImPuJ4bbp+1EUAAAAAAABHqPNUV+o+mvygJoAoAAAAv0/i3yqngj+G/yoigAAAAAAAM2TL3xrWuXBMdszE/YVAAAAAAFcWTUxTXC7LjjeSvy1IuAAAAAAAAOMmKL871LNMamY9NjPnjV9+w1MBUAAHtK99tPFunrxNvYO8eOKfmXYIoAAAAAAAA4y0768eY5dkTE+JBjHeeIjJw4VAAHtKze2oa4iIiIjxCPT61ZaJifExKLgAAAAAAAAABM6iZ9Me5idxxK2bJGu2P2iJpM7ncgKAACvT/AFTH4SdY79lt63ANQ8raLRuJ29RQAAAARnqPVXFstrffUfgKvbJWnmefUI3yzbiOITBKAKAAAAAAEceFa55j6uUgGqt628S6Y3dc14jzv5QrSIf97eoeC1MBUAAAAAAAAAAAAAAAAf/Z',
                    id: 5,
                    followed: true,
                    fullName: 'Vladimir',
                    location: {city: 'Ankara', country: 'Turkey'},
                    status: 'I am student'
                },]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id} className={classes.item}>
                    <div>
                        <img src={u.photoURL}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>
                                Unfollow
                            </button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>
                                Follow
                            </button>
                        }
                    </div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
            )
        }
    </div>
}
export default FindUsers;