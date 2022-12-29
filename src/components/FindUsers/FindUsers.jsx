import axios from 'axios';
import React from 'react';
import classes from './FindUsers.module.css';
import userPhoto from '../../assets/images/ava (FindUsers) .jpg';

const FindUsers = (props) => {
  const getUsers =()=>{
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
          .then((response) => {
            props.setUsers(
                response.data.items,
            );
          });
    }
  };

  return <div>
    <button onClick={getUsers}>Get Users</button>
    {
      props.users.map((u) => <div key={u.id} className={classes.item}>
        <div>
          <img alt="ava" src={u.photos.small !=null ? u.photos.small : userPhoto }/>
        </div>
        <div>
          {u.followed ?
              <button onClick={() => {
                props.unfollow(u.id);
              }}>
                Unfollow
              </button> :
              <button onClick={() => {
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
      </div>,
      )
    }
  </div>;
};
export default FindUsers;
