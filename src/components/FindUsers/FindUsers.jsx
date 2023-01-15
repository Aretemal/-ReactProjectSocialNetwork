import axios from 'axios'
import React from 'react'
import classes from './FindUsers.module.css'
import userPhoto from '../../assets/images/ava (FindUsers) .jpg'

class FindUsers extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
        })
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(
              response.data.items,
          )
        })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    const pages = []
    pagesCount = 30
    for (let i=1; i<=pagesCount; i++) {
      pages.push(i)
    }
    return (
      <div>
        <div>
          {pages.map( (p) => {
            if (this.props.currentPage === p) {
              return <span key={p}
                className={classes.selectedPage}
                onClick={()=>{
                  this.onPageChanged(p)
                }}> {p} </span>
            } else {
              return <span key={p}
                className={classes.normalPage} onClick={ ()=>{
                  this.onPageChanged(p)
                }}> {p} </span>
            }
          },
          )
          }
        </div>
        {
          this.props.users.map((u) => <div key={u.id} className={classes.item}>
            <div>
              <img alt="ava" src={u.photos.small !=null ? u.photos.small : userPhoto }/>
            </div>
            <div>
              {u.followed ?
                <button onClick={() => {
                  this.props.unfollow(u.id)
                }}>
                  Unfollow
                </button> :
                <button onClick={() => {
                  this.props.follow(u.id)
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
      </div>)
  }
}
export default FindUsers
