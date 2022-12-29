import axios from 'axios';
import React from 'react';
import classes from './FindUsers.module.css';
import userPhoto from '../../assets/images/ava (FindUsers) .jpg';

class FindUsers extends React.Component {
  constructor(props) {
    super(props);
    if ( this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
          .then((response) => {
            this.props.setUsers(
                response.data.items,
            );
          });
    }
  }
  render() {
    return <div>
      {
        this.props.users.map((u) => <div key={u.id} className={classes.item}>
          <div>
            <img alt="ava" src={u.photos.small !=null ? u.photos.small : userPhoto }/>
          </div>
          <div>
            {u.followed ?
                <button onClick={() => {
                  this.props.unfollow(u.id);
                }}>
                  Unfollow
                </button> :
                <button onClick={() => {
                  this.props.follow(u.id);
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
  }
}
export default FindUsers;
