import React from 'react';
import { NavLink } from 'react-router-dom';
import DefaultAva from '../../assets/images/DefaultAva.webp';
import classes from './FindUsers.module.css';

function FindUsers({
  totalUsersCount, followingInProgress, pageSize, currentPage, onPageChanged, users, unfollow, follow,
}) {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          if (currentPage === p) {
            return (
              <button
                type='submit'
                key={p}
                className={classes.selectedPage}
                onClick={() => {
                  onPageChanged(p);
                }}
              >
                {p}
              </button>
            );
          }
          return (
            <button
              type='submit'
              key={p}
              className={classes.normalPage}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </button>
          );
        })}
      </div>
      {
      users.map((u) => (
        <div key={u.id} className={classes.item}>
          <div>
            <NavLink to={`/profile/${u.id}`}>
              <img alt="ava" src={u.photos.small != null ? u.photos.small : DefaultAva} />
            </NavLink>
          </div>
          <div>
            {u.followed
              ? (
                <button
                  type='submit'
                  disabled={followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              )
              : (
                <button
                  type='submit'
                  disabled={followingInProgress.some((id) => id === u.id)}
                  onClick={() => { follow(u.id); }}
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
