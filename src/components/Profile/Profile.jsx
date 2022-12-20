import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = (props) => {
  return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
  )
}
export default Profile
