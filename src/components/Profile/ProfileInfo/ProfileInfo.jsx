import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import notAvatar from "../../../assets/images/no_avatar.jpg";
import ProfileStatusHooks from "../ProfileStatus/ProfileStatusHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

  if(!profile) {
    return <Preloader />
  }

  const contacts = profile.contacts

  return (
      <div className={classes.profileCard}>
        <div className={classes.fullImage} style={{backgroundImage: `url(${profile.photos.large})`}} />

        <div className={classes.info}>
          <div className={classes.avatar}>

            {
              profile.photos.small ?
                <img src={profile.photos.small}  alt="" />
                :
                <img src={notAvatar}  alt="" />
            }

          </div>

          <div className={classes.control} />
        </div>
        <div className={classes.description}>
          <div className={classes.col8}>
            <p className={classes.fullName}>{profile.fullName}</p>

            <ProfileStatusHooks
              status={status}
              updateStatus={updateStatus}
            />

            <p className={classes.text}>{profile.lookingForAJobDescription}</p>
          </div>
          <div className={classes.col4}>
            <ul className={classes.lists}>
              <li><b>Ищу работу: </b> {profile.lookingForAJob ? 'Yes' : 'No'}</li>
            </ul>
          </div>

          <div className={classes.col12}>
            <ul className={classes.lists} style={{marginTop: '24px'}}>
              {
                Object.keys(contacts).map(key => {
                  if (contacts[key])
                    return(
                      <li className={classes.inner}>
                        <b>{key} :</b>
                        {contacts[key]}
                      </li>
                    )
                })
              }
            </ul>
          </div>
        </div>
      </div>
  )
}

export default ProfileInfo