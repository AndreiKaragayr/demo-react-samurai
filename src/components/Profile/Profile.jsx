import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import SidebarContainer from "../Sidebar/SidebarContainer";

const Profile = props => {

  return (
      <div className={styles.profileBody}>
          <div className={styles.profile}>
              <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
              />
              <MyPostsContainer />
          </div>
          <SidebarContainer />
      </div>
  )
};

export default Profile