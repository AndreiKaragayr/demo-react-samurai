import React from 'react';
import styles from "./Users.module.css";
import notAvatar from "../../assets/images/no_avatar.jpg";
import {NavLink} from "react-router-dom";

const User = ({id, name, photos, followed, unfollow, follow, followProgress}) => {

  return (

    <div className={styles.col}>
      <div className={styles.card}>
        <NavLink to={"/profile/" + id} className={styles.navLink} />

        <div className={styles.card_head}>
          <img className={styles.card_img} src={photos.large != null ? photos.large : notAvatar} alt="avatar" />
          <img className={styles.card_avatar} src={photos.small != null ? photos.small : notAvatar} alt="avatar" />
        </div>
        <div className={styles.card_body}>
          <p>{name}</p>
          {/*<span>{user.status}</span>*/}
          {/*<small>{user.location.city} - {user.location.country}</small>*/}
        </div>
        <div className={styles.card_footer}>

          {
            followed
              ?
              <button
                disabled={followProgress.some(id => id === id)}
                className={styles.link}
                onClick={() => unfollow(id)}>Убрать из контактов</button>
              :
              <button
                disabled={followProgress.some(id => id === id)}
                className={styles.link}
                onClick={() => follow(id)}>Добавить в контакты</button>
          }

        </div>
      </div>
    </div>
  )
};

export default User;