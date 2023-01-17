import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/ava (FindUsers) .jpg';
import classes from './FindUsers.module.css';

function FindUsers({
  totalUsersCount, followingInProgress, toggleIsFollowingProgress, pageSize, currentPage, onPageChanged, users, unfollow, follow,
}) {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  pagesCount = 30;
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          if (currentPage === p) {
            return (
              <span
                key={p}
                className={classes.selectedPage}
                onClick={() => {
                  onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          }
          return (
            <span
              key={p}
              className={classes.normalPage}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {
      users.map((u) => (
        <div key={u.id} className={classes.item}>
          <div>
            <NavLink to={`/profile/${u.id}`}>
              <img alt="ava" src={u.photos.small != null ? u.photos.small : userPhoto} />
            </NavLink>
          </div>
          <div>
            {u.followed
              ? (
                <button
                  disabled={followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    toggleIsFollowingProgress(true, u.id);
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                      withCredentials: true,
                      headers: {
                        'API-KEY': '4cea6ad3-6ebd-4af9-90c6-94d117110aca',
                      },
                    })
                      .then((response) => {
                        if (!response.data.resultCode) {
                          unfollow(u.id);
                        }
                        toggleIsFollowingProgress(false, u.id);
                      });
                  }}>
                  Unfollow
                </button>
              )
              : (
                <button
                  disabled={followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    toggleIsFollowingProgress(true, u.id);
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                      withCredentials: true,
                      headers: {
                        'API-KEY': '4cea6ad3-6ebd-4af9-90c6-94d117110aca',
                      },
                    })
                      .then((response) => {
                        if (!response.data.resultCode) {
                          follow(u.id);
                        }
                        toggleIsFollowingProgress(false, u.id);
                      });
                  }}
                >
                  Follow
                </button>
              )}
          </div>
          <div>{u.name}</div>
          <div>{u.status}</div>
          <div>u.location.country</div>
          <div>u.location.city</div>
        </div>
      ))
    }
    </div>
  );
}

export default FindUsers;
