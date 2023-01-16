import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/ava (FindUsers) .jpg';
import classes from './FindUsers.module.css';

function FindUsers({
  totalUsersCount, pageSize, currentPage, onPageChanged, users, unfollow, follow,
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
                <button onClick={() => {
                  unfollow(u.id);
                }}>
                  Unfollow
                </button>
              )
              : (
                <button onClick={() => {
                  follow(u.id);
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
