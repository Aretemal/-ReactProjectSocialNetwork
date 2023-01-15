//  import React from 'react';
import {connect} from 'react-redux'
import {
  followAC,
  setCurrentPageAC, setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from '../../redux/FindUsers-reducer.js'
import FindUsers from './FindUsers.jsx'


const mapStateToProps = (state) => {
  return {
    users: state.findUsersPage.users,
    pageSize: state.findUsersPage.pageSize,
    totalUsersCount: state.findUsersPage.totalUsersCount,
    currentPage: state.findUsersPage.currentPage,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId)=>{
      dispatch(followAC(userId))
    },
    unfollow: (userId)=>{
      dispatch(unfollowAC(userId))
    },
    setUsers: (users)=>{
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber)=>{
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount)=>{
      dispatch(setTotalUsersCountAC(totalCount))
    },
  }
}
const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)
export default FindUsersContainer
