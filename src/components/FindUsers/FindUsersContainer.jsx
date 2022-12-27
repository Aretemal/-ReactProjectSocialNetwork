//  import React from 'react';
import {connect} from 'react-redux';
import {followAC, setUsersAC, unfollowAC} from '../../redux/FindUsers-reducer.js';
import FindUsers from './FindUsers.jsx';


const mapStateToProps = (state) => {
  return {
    users: state.findUsersPage.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId)=>{
      dispatch(followAC(userId));
    },
    unfollow: (userId)=>{
      dispatch(unfollowAC(userId));
    },
    setUsers: (users)=>{
      dispatch(setUsersAC(users));
    },
  };
};
const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);
export default FindUsersContainer;
