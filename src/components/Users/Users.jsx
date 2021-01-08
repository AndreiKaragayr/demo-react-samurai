import React from 'react';
import styles from "./Users.module.css";
import notAvatar from "../../assets/images/no_avatar.jpg";
import {NavLink} from "react-router-dom";
import Pagination from "../common/pagination/Pagination";
import User from "./User";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return (
        <div className={styles.flex}>
            {
                users.map(user => {
                    console.log(user)
                    return (
                        <User
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            photos={user.photos}
                            followed={user.followed}
                            unfollow={props.unfollow}
                            follow={props.follow}
                            followProgress={props.followProgress}
                        />
                    )
                })
            }

            <Pagination
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
        </div>
    )
};

export default Users;