//  import React from 'react';
// import preloader from '../../assets/images/preloader.svg';
import Preloader from '../common/Preloader/Preloader.jsx';
import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import {
  follow,
  setCurrentPage, setTotalUsersCount,
  setUsers, toggleIsFetching,
  unfollow,
} from '../../redux/FindUsers-reducer.js';
import FindUsers from './FintUsers.jsx';
class FindUsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(
              response.data.items,
          );
        });
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> :
      <FindUsers
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
      }
    </>;
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.findUsersPage.users,
    pageSize: state.findUsersPage.pageSize,
    totalUsersCount: state.findUsersPage.totalUsersCount,
    currentPage: state.findUsersPage.currentPage,
    isFetching: state.findUsersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(FindUsersContainer);
