import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/ava (FindUsers) .jpg';
import classes from './FindUsers.module.css';

const FindUsers = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  pagesCount = 30;
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (<div>
    <div>
      {pages.map((p) => {
        if (props.currentPage === p) {
          return <span key={p}
            className={classes.selectedPage}
            onClick={() => {
              props.onPageChanged(p);
            }}> {p} </span>;
        }
        return <span key={p}
            className={classes.normalPage} onClick={ () => {
              props.onPageChanged(p);
            }}> {p} </span>;
      })
      }
    </div>
    {
      props.users.map((u) => <div key={u.id} className={classes.item}>
        <div>
          <NavLink to={`/profile/${u.id}`}>
            <img alt="ava" src={u.photos.small != null ? u.photos.small : userPhoto }/>
          </NavLink>
        </div>
        <div>
          {u.followed
            ? <button onClick={() => {
              props.unfollow(u.id);
            }}>
                Unfollow
              </button>
            : <button onClick={() => {
              props.follow(u.id);
            }}>
                Follow
              </button>
          }
        </div>
        <div>{u.name}</div>
        <div>{u.status}</div>
        <div>{'u.location.country'}</div>
        <div>{'u.location.city'}</div>
      </div>)
    }
  </div>);
};

export default FindUsers;
