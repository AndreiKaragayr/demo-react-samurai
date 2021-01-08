import React from 'react'
import styles from './Sidebar.module.css'
import avatar from './avatar.jpg'

const Sidebar = props => {

    let renderFriends = props.friends.map(friend => {
        return (
            <div key={friend.id} className={styles.friendItem}>
                <div className={styles.col}>
                    <img src={avatar} alt={friend.name} />
                </div>
                <div className={styles.col}>
                    <a href="">{friend.name}</a>
                    <p className={styles.career}>{friend.career}</p>
                </div>
            </div>
        )
    })

    return (
        <div className={styles.sidebar}>
            <div>
                <p className={styles.sidebarTitle}>Friends</p>
                {renderFriends}
            </div>
        </div>
    )
}

export default Sidebar